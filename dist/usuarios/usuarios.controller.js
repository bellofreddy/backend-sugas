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
exports.UsuariosController = void 0;
const common_1 = require("@nestjs/common");
const role_guard_guard_1 = require("../roles/role-guard/role-guard.guard");
const role_decorator_1 = require("../roles/decorator/role.decorator");
const create_usuario_dto_1 = require("./dto/create-usuario.dto");
const usuarios_service_1 = require("./usuarios.service");
let UsuariosController = class UsuariosController {
    constructor(userService) {
        this.userService = userService;
    }
    create(createUserDto) {
        return this.userService.create(createUserDto);
    }
    findAll() {
        return this.userService.findAll();
    }
    findOne(id) {
        return this.userService.findOne(+id);
    }
    async puedeRecuperar(cedula, token) {
        return await this.userService.puedeRecuperar(cedula, token);
    }
    async recuperarContrasena(email) {
        return await this.userService.recuperarContrasena(email);
    }
    findProgramasAsignados(id) {
        return this.userService.findProgramasAsignados(+id);
    }
    findProgramasNoAsignados(id) {
        return this.userService.findProgramasNoAsignados(+id);
    }
    remove(id) {
        return this.userService.remove(+id);
    }
};
exports.UsuariosController = UsuariosController;
__decorate([
    (0, common_1.Post)(),
    (0, role_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_usuario_dto_1.CreateUsuarioDto]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, role_decorator_1.Roles)('admin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, role_decorator_1.Roles)('admin', 'instructor', 'coordinador'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/puede-recuperar/:cedula/:token'),
    __param(0, (0, common_1.Param)('cedula')),
    __param(1, (0, common_1.Param)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "puedeRecuperar", null);
__decorate([
    (0, common_1.Post)('/recuperar-contrasena'),
    __param(0, (0, common_1.Body)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "recuperarContrasena", null);
__decorate([
    (0, common_1.Get)(':id/programas-asignados'),
    (0, role_decorator_1.Roles)('admin', 'instructor', 'coordinador'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "findProgramasAsignados", null);
__decorate([
    (0, common_1.Get)(':id/programas-no-asignados'),
    (0, role_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "findProgramasNoAsignados", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, role_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "remove", null);
exports.UsuariosController = UsuariosController = __decorate([
    (0, common_1.Controller)('usuarios'),
    (0, common_1.UseGuards)(role_guard_guard_1.RolesGuard),
    __metadata("design:paramtypes", [usuarios_service_1.UsuariosService])
], UsuariosController);
//# sourceMappingURL=usuarios.controller.js.map