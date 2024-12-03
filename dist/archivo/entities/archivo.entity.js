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
exports.Archivo = void 0;
const resultado_entity_1 = require("../../resultados/entities/resultado.entity");
const typeorm_1 = require("typeorm");
let Archivo = class Archivo {
};
exports.Archivo = Archivo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Archivo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Archivo.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Archivo.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Archivo.prototype, "tamano", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Archivo.prototype, "publicid", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Archivo.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Archivo.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => resultado_entity_1.Resultado, (resultado) => resultado.archivo, { nullable: false }),
    __metadata("design:type", resultado_entity_1.Resultado)
], Archivo.prototype, "resultadoId", void 0);
exports.Archivo = Archivo = __decorate([
    (0, typeorm_1.Entity)()
], Archivo);
//# sourceMappingURL=archivo.entity.js.map