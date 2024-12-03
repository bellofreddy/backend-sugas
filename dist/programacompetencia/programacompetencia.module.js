"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramacompetenciaModule = void 0;
const common_1 = require("@nestjs/common");
const programacompetencia_service_1 = require("./programacompetencia.service");
const programacompetencia_controller_1 = require("./programacompetencia.controller");
const typeorm_1 = require("@nestjs/typeorm");
const programa_entity_1 = require("../programa/entities/programa.entity");
const competencia_entity_1 = require("../competencia/entities/competencia.entity");
let ProgramacompetenciaModule = class ProgramacompetenciaModule {
};
exports.ProgramacompetenciaModule = ProgramacompetenciaModule;
exports.ProgramacompetenciaModule = ProgramacompetenciaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([programa_entity_1.Programa, competencia_entity_1.Competencia])],
        controllers: [programacompetencia_controller_1.ProgramacompetenciaController],
        providers: [programacompetencia_service_1.ProgramacompetenciaService],
    })
], ProgramacompetenciaModule);
//# sourceMappingURL=programacompetencia.module.js.map