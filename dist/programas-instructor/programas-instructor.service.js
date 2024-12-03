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
exports.ProgramasInstructorService = void 0;
const common_1 = require("@nestjs/common");
const programa_service_1 = require("../programa/programa.service");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const usuario_entity_1 = require("../usuarios/entities/usuario.entity");
const usuarios_service_1 = require("../usuarios/usuarios.service");
let ProgramasInstructorService = class ProgramasInstructorService {
    constructor(programaService, userService, userRepository) {
        this.programaService = programaService;
        this.userService = userService;
        this.userRepository = userRepository;
    }
    async AsignarProgramasAInstructor(createProgramasInstructorDto) {
        const instructor = await this.userService.findOne(createProgramasInstructorDto.instructor);
        if (!instructor) {
            throw new common_1.NotFoundException(`Instructor con ID ${createProgramasInstructorDto.instructor} no encontrado`);
        }
        const programa = await this.programaService.findProgramasByIds(createProgramasInstructorDto.programa);
        if (!programa || programa.length === 0) {
            throw new common_1.NotFoundException(`Competencias con ID ${createProgramasInstructorDto.programa} no encontradas`);
        }
        const programasExistentes = instructor.programa || [];
        programa.forEach((nuevoPrograma) => {
            if (programasExistentes.some((programa) => programa.id === nuevoPrograma.id)) {
                throw new common_1.ConflictException(`La competencia con ID ${nuevoPrograma.id} ya está relacionada con el programa con ID ${createProgramasInstructorDto.instructor}`);
            }
        });
        instructor.programa = [...programasExistentes, ...programa];
        const userPrograma = await this.userRepository.preload({
            id: instructor.id,
            programa: instructor.programa,
        });
        return await this.userRepository.save(userPrograma);
    }
    findAll() {
        return `This action returns all programasInstructor`;
    }
    findOne(id) {
        return `This action returns a #${id} programasInstructor`;
    }
    update(id, updateProgramasInstructorDto) {
        return `This action updates a #${id} programasInstructor`;
    }
    remove(id) {
        return `This action removes a #${id} programasInstructor`;
    }
};
exports.ProgramasInstructorService = ProgramasInstructorService;
exports.ProgramasInstructorService = ProgramasInstructorService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_2.InjectRepository)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [programa_service_1.ProgramaService,
        usuarios_service_1.UsuariosService,
        typeorm_1.Repository])
], ProgramasInstructorService);
//# sourceMappingURL=programas-instructor.service.js.map