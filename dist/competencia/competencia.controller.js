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
exports.CompetenciaController = void 0;
const common_1 = require("@nestjs/common");
const competencia_service_1 = require("./competencia.service");
const create_competencia_dto_1 = require("./dto/create-competencia.dto");
const update_competencia_dto_1 = require("./dto/update-competencia.dto");
const role_guard_guard_1 = require("../roles/role-guard/role-guard.guard");
const role_decorator_1 = require("../roles/decorator/role.decorator");
let CompetenciaController = class CompetenciaController {
    constructor(competenciaService) {
        this.competenciaService = competenciaService;
    }
    create(createCompetenciaDto) {
        return this.competenciaService.create(createCompetenciaDto);
    }
    findAll() {
        return this.competenciaService.findAll();
    }
    findOne(id) {
        return this.competenciaService.findOne(id);
    }
    update(id, updateCompetenciaDto) {
        return this.competenciaService.update(+id, updateCompetenciaDto);
    }
    remove(id) {
        return this.competenciaService.remove(id);
    }
};
exports.CompetenciaController = CompetenciaController;
__decorate([
    (0, common_1.Post)(),
    (0, role_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_competencia_dto_1.CreateCompetenciaDto]),
    __metadata("design:returntype", void 0)
], CompetenciaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, role_decorator_1.Roles)('admin', 'coordinador'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CompetenciaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, role_decorator_1.Roles)('admin', 'coordinador', 'instructor'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CompetenciaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, role_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_competencia_dto_1.UpdateCompetenciaDto]),
    __metadata("design:returntype", void 0)
], CompetenciaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, role_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CompetenciaController.prototype, "remove", null);
exports.CompetenciaController = CompetenciaController = __decorate([
    (0, common_1.Controller)('competencia'),
    (0, common_1.UseGuards)(role_guard_guard_1.RolesGuard),
    __metadata("design:paramtypes", [competencia_service_1.CompetenciaService])
], CompetenciaController);
//# sourceMappingURL=competencia.controller.js.map