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
exports.ResultadosController = void 0;
const common_1 = require("@nestjs/common");
const resultados_service_1 = require("./resultados.service");
const create_resultado_dto_1 = require("./dto/create-resultado.dto");
const update_resultado_dto_1 = require("./dto/update-resultado.dto");
const role_guard_guard_1 = require("../roles/role-guard/role-guard.guard");
const role_decorator_1 = require("../roles/decorator/role.decorator");
let ResultadosController = class ResultadosController {
    constructor(resultadosService) {
        this.resultadosService = resultadosService;
    }
    create(createResultadoDto, competenciaId, programaId) {
        console.log(programaId);
        return this.resultadosService.create(createResultadoDto, competenciaId, programaId);
    }
    findAll() {
        return this.resultadosService.findAll();
    }
    findOne(id) {
        return this.resultadosService.findOne(+id);
    }
    findcomppro(idcomp, idprog) {
        return this.resultadosService.findresultadoprocomp(idprog, idcomp);
    }
    update(id, updateResultadoDto) {
        return this.resultadosService.update(+id, updateResultadoDto);
    }
    remove(id) {
        return this.resultadosService.remove(id);
    }
};
exports.ResultadosController = ResultadosController;
__decorate([
    (0, common_1.Post)(':competenciaId/:programaId'),
    (0, role_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('competenciaId')),
    __param(2, (0, common_1.Param)('programaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_resultado_dto_1.CreateResultadoDto, Number, Number]),
    __metadata("design:returntype", void 0)
], ResultadosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ResultadosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, role_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResultadosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':idprograma/:idcompetencia'),
    (0, role_decorator_1.Roles)('admin', 'coordinador', 'instructor'),
    __param(0, (0, common_1.Param)('idcompetencia')),
    __param(1, (0, common_1.Param)('idprograma')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ResultadosController.prototype, "findcomppro", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, role_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_resultado_dto_1.UpdateResultadoDto]),
    __metadata("design:returntype", void 0)
], ResultadosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('codigo/:id'),
    (0, role_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ResultadosController.prototype, "remove", null);
exports.ResultadosController = ResultadosController = __decorate([
    (0, common_1.Controller)('resultados'),
    (0, common_1.UseGuards)(role_guard_guard_1.RolesGuard),
    __metadata("design:paramtypes", [resultados_service_1.ResultadosService])
], ResultadosController);
//# sourceMappingURL=resultados.controller.js.map