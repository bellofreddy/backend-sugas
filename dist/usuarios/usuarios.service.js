"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_entity_1 = require("./entities/usuario.entity");
const typeorm_2 = require("typeorm");
const programa_service_1 = require("../programa/programa.service");
const mailer_1 = require("@nestjs-modules/mailer");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const jwt_constans_1 = require("../auth/constans/jwt.constans");
let UsuariosService = class UsuariosService {
    constructor(userRepository, programaService, mailerService, configService, jwtService) {
        this.userRepository = userRepository;
        this.programaService = programaService;
        this.mailerService = mailerService;
        this.configService = configService;
        this.jwtService = jwtService;
    }
    async create(createUserDto) {
        const user = this.userRepository.create(createUserDto);
        return await this.userRepository.save(user);
    }
    async findAll() {
        const users = await this.userRepository.find({
            relations: ['programa', 'role'],
            select: ['id', 'name', 'email', 'cedula', 'telefono'],
        });
        return users;
    }
    async recuperarContrasena(email) {
        const usuario = await this.userRepository.findOne({ where: { email: email } });
        if (usuario == null) {
            return {
                success: false,
                message: "No se encontró ningún usuario con ese correo electrónico",
            };
        }
        const payload = {
            cedula: usuario.cedula,
        };
        const token = await this.jwtService.signAsync(payload);
        return await this.mailerService.sendMail({
            to: email,
            subject: "Recuperación de contraseña",
            template: 'correo-recuperacion',
            context: {
                nombres: `${usuario.name} `,
                endpointBackend: this.configService.get('ENDPOINT_BACKEND'),
                fondoPlantilla: `${this.configService.get('ENDPOINT_BACKEND')}/public/img/fondo.png`,
                linkRecuperacion: `${this.configService.get('ENDPOINT_FRONTEND')}${usuario.cedula}/${token}`,
            }
        }).then((send) => {
            return send.accepted.length > 0 ? {
                success: true,
                message: "Se ha enviado un correo electrónico con instrucciones para restablecer la contraseña",
            } : {
                success: false,
                message: "No se ha podido enviar el correo electrónico",
            };
        }).catch(error => {
            return {
                success: false,
                message: "Sucedió un error enviando el correo",
                ex: error
            };
        });
    }
    async puedeRecuperar(cedula, token) {
        const usuario = await this.userRepository.findOne({ where: { cedula: cedula } });
        if (usuario == null) {
            return {
                puede: false,
                message: "No existe el usuario",
                ex: null
            };
        }
        const isValidToken = await this.jwtService.verifyAsync(token, {
            secret: jwt_constans_1.jwtConstants.secret,
        });
        return isValidToken ? {
            puede: true,
            message: null,
            ex: null,
            email: usuario.email
        } : {
            puede: false,
            message: "Tiempo vencido, vuelva a enviar otra solicitud de recuperación",
            ex: null
        };
    }
    async findProgramasAsignados(id) {
        const user = await this.userRepository.findOne({
            where: { id },
            relations: ['programa', 'programa.competencias'],
        });
        if (!user) {
            throw new common_1.NotFoundException(`User #${id} not found`);
        }
        return user.programa;
    }
    async findProgramasNoAsignados(id) {
        const user = await this.userRepository.findOne({
            where: { id },
            relations: ['programa'],
        });
        const allProgramas = await this.programaService.findAll();
        const programasNoAsignados = allProgramas.filter((programa) => !user.programa.some((userPrograma) => userPrograma.id === programa.id));
        return programasNoAsignados;
    }
    async findOne(id) {
        return await this.userRepository.findOne({
            where: { id },
            relations: ['programa'],
        });
    }
    async findByEmail(email) {
        return await this.userRepository.findOne({
            where: { email }, relations: ['role']
        });
    }
    async update(updateUserDto) {
        const user = await this.userRepository.findOne({
            where: { email: updateUserDto.email },
        });
        console.log(user);
        Object.assign(user, updateUserDto);
        return await this.userRepository.save(user);
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        programa_service_1.ProgramaService,
        mailer_1.MailerService,
        config_1.ConfigService,
        jwt_1.JwtService])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map