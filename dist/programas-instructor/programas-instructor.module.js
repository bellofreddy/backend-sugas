"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramasInstructorModule = void 0;
const common_1 = require("@nestjs/common");
const programas_instructor_service_1 = require("./programas-instructor.service");
const programas_instructor_controller_1 = require("./programas-instructor.controller");
const programa_module_1 = require("../programa/programa.module");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_entity_1 = require("../usuarios/entities/usuario.entity");
const usuarios_module_1 = require("../usuarios/usuarios.module");
let ProgramasInstructorModule = class ProgramasInstructorModule {
};
exports.ProgramasInstructorModule = ProgramasInstructorModule;
exports.ProgramasInstructorModule = ProgramasInstructorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            usuarios_module_1.UsuariosModule,
            programa_module_1.ProgramaModule,
            typeorm_1.TypeOrmModule.forFeature([usuario_entity_1.Usuario]),
        ],
        controllers: [programas_instructor_controller_1.ProgramasInstructorController],
        providers: [programas_instructor_service_1.ProgramasInstructorService],
        exports: [programas_instructor_service_1.ProgramasInstructorService],
    })
], ProgramasInstructorModule);
//# sourceMappingURL=programas-instructor.module.js.map