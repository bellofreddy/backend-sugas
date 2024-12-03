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
exports.Programa = void 0;
const competencia_entity_1 = require("../../competencia/entities/competencia.entity");
const resultado_entity_1 = require("../../resultados/entities/resultado.entity");
const usuario_entity_1 = require("../../usuarios/entities/usuario.entity");
const typeorm_1 = require("typeorm");
let Programa = class Programa {
};
exports.Programa = Programa;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Programa.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 80 }),
    __metadata("design:type", String)
], Programa.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], Programa.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Programa.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => resultado_entity_1.Resultado, resultado => resultado.programa),
    __metadata("design:type", Array)
], Programa.prototype, "resultados", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => competencia_entity_1.Competencia, competencia => competencia.programas),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Programa.prototype, "competencias", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => usuario_entity_1.Usuario, (user) => user.programa),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", usuario_entity_1.Usuario)
], Programa.prototype, "usuario", void 0);
exports.Programa = Programa = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Index)("IDX_PROGRAMA_CODIGO", ["codigo"], { unique: true })
], Programa);
//# sourceMappingURL=programa.entity.js.map