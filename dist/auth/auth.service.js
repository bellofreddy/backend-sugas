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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jwt_1 = require("@nestjs/jwt");
const bcryptjs = require("bcryptjs");
const common_1 = require("@nestjs/common");
const roles_service_1 = require("../roles/roles.service");
const programa_service_1 = require("../programa/programa.service");
const usuarios_service_1 = require("../usuarios/usuarios.service");
let AuthService = class AuthService {
    constructor(usuarioService, rolesService, programaService, JwtService) {
        this.usuarioService = usuarioService;
        this.rolesService = rolesService;
        this.programaService = programaService;
        this.JwtService = JwtService;
    }
    async register(registerAuthDto) {
        const user = await this.usuarioService.findByEmail(registerAuthDto.email);
        if (user) {
            throw new common_1.BadRequestException('Email already exists');
        }
        const role = await this.rolesService.findOne(registerAuthDto.role);
        if (!role) {
            throw new common_1.BadRequestException('Role not found');
        }
        const hashedPassword = await bcryptjs.hash(registerAuthDto.password, 10);
        return await this.usuarioService.create({
            ...registerAuthDto,
            password: hashedPassword,
        });
    }
    async cambiarContrasena(updatePasswordDto) {
        const user = await this.usuarioService.findByEmail(updatePasswordDto.email);
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        const hashedPassword = await bcryptjs.hash(updatePasswordDto.password, 10);
        const result = await this.usuarioService.update({ ...updatePasswordDto, password: hashedPassword });
        if (!result) {
            throw new common_1.BadRequestException('Error al actualizar la contraseña');
        }
        return { message: 'Password updated successfully' };
    }
    async login(loginAuthDto) {
        const user = await this.usuarioService.findByEmail(loginAuthDto.email);
        if (!user) {
            throw new common_1.BadRequestException('Invalid credentials');
        }
        const isPasswordValid = await bcryptjs.compare(loginAuthDto.password, user.password);
        if (!isPasswordValid) {
            throw new common_1.BadRequestException('Incorrect password');
        }
        const payload = {
            id: user.id,
            email: user.email,
            rol: user.role.rol_name,
        };
        const token = await this.JwtService.signAsync(payload);
        if (!token) {
            throw new common_1.BadRequestException('Invalid credentials');
        }
        return {
            access_token: token,
            email: payload.email,
            nombre: user.name,
            cedula: user.cedula,
            telefono: user.telefono,
            rol: payload.rol,
            id: payload.id
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [usuarios_service_1.UsuariosService,
        roles_service_1.RolesService,
        programa_service_1.ProgramaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map