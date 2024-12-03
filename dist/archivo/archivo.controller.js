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
exports.ArchivoController = void 0;
const common_1 = require("@nestjs/common");
const archivo_service_1 = require("./archivo.service");
const create_archivo_dto_1 = require("./dto/create-archivo.dto");
const update_archivo_dto_1 = require("./dto/update-archivo.dto");
const role_guard_guard_1 = require("../roles/role-guard/role-guard.guard");
const role_decorator_1 = require("../roles/decorator/role.decorator");
let ArchivoController = class ArchivoController {
    constructor(archivoService) {
        this.archivoService = archivoService;
    }
    create(createArchivoDto, id) {
        return this.archivoService.create(createArchivoDto, +id);
    }
    findAll() {
        return this.archivoService.findAll();
    }
    findAllresultado(id) {
        return this.archivoService.findAllarchresultado(+id);
    }
    update(id, updateArchivoDto) {
        return this.archivoService.update(+id, updateArchivoDto);
    }
    remove(id) {
        return this.archivoService.remove(id);
    }
};
exports.ArchivoController = ArchivoController;
__decorate([
    (0, common_1.Post)(':resultadoId'),
    (0, role_decorator_1.Roles)('admin', 'coordinador'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('resultadoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_archivo_dto_1.CreateArchivoDto, Number]),
    __metadata("design:returntype", void 0)
], ArchivoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, role_decorator_1.Roles)('admin', 'coordinador'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArchivoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, role_decorator_1.Roles)('admin', 'coordinador', 'instructor'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArchivoController.prototype, "findAllresultado", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, role_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_archivo_dto_1.UpdateArchivoDto]),
    __metadata("design:returntype", void 0)
], ArchivoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, role_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ArchivoController.prototype, "remove", null);
exports.ArchivoController = ArchivoController = __decorate([
    (0, common_1.Controller)('archivo'),
    (0, common_1.UseGuards)(role_guard_guard_1.RolesGuard),
    __metadata("design:paramtypes", [archivo_service_1.ArchivoService])
], ArchivoController);
//# sourceMappingURL=archivo.controller.js.map