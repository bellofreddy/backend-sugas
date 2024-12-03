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
exports.Competencia = void 0;
const programa_entity_1 = require("../../programa/entities/programa.entity");
const resultado_entity_1 = require("../../resultados/entities/resultado.entity");
const typeorm_1 = require("typeorm");
let Competencia = class Competencia {
};
exports.Competencia = Competencia;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Competencia.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 80 }),
    __metadata("design:type", String)
], Competencia.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 200 }),
    __metadata("design:type", String)
], Competencia.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Competencia.prototype, "duracion", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => programa_entity_1.Programa, programa => programa.competencias, { nullable: false }),
    __metadata("design:type", Array)
], Competencia.prototype, "programas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => resultado_entity_1.Resultado, (resultado) => resultado.competencia, { nullable: false }),
    __metadata("design:type", Array)
], Competencia.prototype, "resultado", void 0);
exports.Competencia = Competencia = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Index)("IDX_COMPETENCIA_CODIGO", ["codigo"], { unique: true })
], Competencia);
//# sourceMappingURL=competencia.entity.js.map