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
exports.ProgramaController = void 0;
const common_1 = require("@nestjs/common");
const programa_service_1 = require("./programa.service");
const create_programa_dto_1 = require("./dto/create-programa.dto");
const update_programa_dto_1 = require("./dto/update-programa.dto");
const role_guard_guard_1 = require("../roles/role-guard/role-guard.guard");
const role_decorator_1 = require("../roles/decorator/role.decorator");
let ProgramaController = class ProgramaController {
    constructor(programaService) {
        this.programaService = programaService;
    }
    create(createProgramaDto) {
        return this.programaService.create(createProgramaDto);
    }
    findAll() {
        return this.programaService.findAll();
    }
    async getCompetenciasPorPrograma(programaId) {
        return this.programaService.getCompetenciasPorPrograma(+programaId);
    }
    findOne(id) {
        return this.programaService.findOne(+id);
    }
    update(id, updateProgramaDto) {
        return this.programaService.update(+id, updateProgramaDto);
    }
    remove(id) {
        return this.programaService.remove(id);
    }
};
exports.ProgramaController = ProgramaController;
__decorate([
    (0, common_1.Post)('CrearPrograma'),
    (0, role_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_programa_dto_1.CreateProgramaDto]),
    __metadata("design:returntype", void 0)
], ProgramaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, role_decorator_1.Roles)('admin', 'coordinador', 'instructor'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProgramaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id/competencias'),
    (0, role_decorator_1.Roles)('admin', 'instructor'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProgramaController.prototype, "getCompetenciasPorPrograma", null);
__decorate([
    (0, common_1.Get)('codigo/:id'),
    (0, role_decorator_1.Roles)('admin', 'coordinador', 'instructor'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProgramaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, role_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_programa_dto_1.UpdateProgramaDto]),
    __metadata("design:returntype", void 0)
], ProgramaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('codigo/:id'),
    (0, role_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProgramaController.prototype, "remove", null);
exports.ProgramaController = ProgramaController = __decorate([
    (0, common_1.Controller)('programa'),
    (0, common_1.UseGuards)(role_guard_guard_1.RolesGuard),
    __metadata("design:paramtypes", [programa_service_1.ProgramaService])
], ProgramaController);
//# sourceMappingURL=programa.controller.js.map