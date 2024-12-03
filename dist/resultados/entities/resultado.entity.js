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
exports.Resultado = void 0;
const archivo_entity_1 = require("../../archivo/entities/archivo.entity");
const competencia_entity_1 = require("../../competencia/entities/competencia.entity");
const programa_entity_1 = require("../../programa/entities/programa.entity");
const typeorm_1 = require("typeorm");
let Resultado = class Resultado {
};
exports.Resultado = Resultado;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Resultado.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 200 }),
    __metadata("design:type", String)
], Resultado.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Resultado.prototype, "duracion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => programa_entity_1.Programa, programa => programa.resultados, { nullable: false }),
    __metadata("design:type", programa_entity_1.Programa)
], Resultado.prototype, "programa", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => competencia_entity_1.Competencia, (competencia) => competencia.resultado, { nullable: false }),
    __metadata("design:type", competencia_entity_1.Competencia)
], Resultado.prototype, "competencia", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => archivo_entity_1.Archivo, (archivo) => archivo.resultadoId, { nullable: false }),
    __metadata("design:type", Array)
], Resultado.prototype, "archivo", void 0);
exports.Resultado = Resultado = __decorate([
    (0, typeorm_1.Entity)()
], Resultado);
//# sourceMappingURL=resultado.entity.js.map