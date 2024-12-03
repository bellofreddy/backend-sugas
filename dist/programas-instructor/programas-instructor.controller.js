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
exports.ProgramasInstructorController = void 0;
const common_1 = require("@nestjs/common");
const programas_instructor_service_1 = require("./programas-instructor.service");
const create_programas_instructor_dto_1 = require("./dto/create-programas-instructor.dto");
const update_programas_instructor_dto_1 = require("./dto/update-programas-instructor.dto");
const auth_guard_1 = require("../auth/auth.guard");
const role_guard_guard_1 = require("../roles/role-guard/role-guard.guard");
const role_decorator_1 = require("../roles/decorator/role.decorator");
let ProgramasInstructorController = class ProgramasInstructorController {
    constructor(programasInstructorService) {
        this.programasInstructorService = programasInstructorService;
    }
    async create(createProgramasInstructorDto) {
        return await this.programasInstructorService.AsignarProgramasAInstructor(createProgramasInstructorDto);
    }
    findAll() {
        return this.programasInstructorService.findAll();
    }
    findOne(id) {
        return this.programasInstructorService.findOne(+id);
    }
    update(id, updateProgramasInstructorDto) {
        return this.programasInstructorService.update(+id, updateProgramasInstructorDto);
    }
    remove(id) {
        return this.programasInstructorService.remove(+id);
    }
};
exports.ProgramasInstructorController = ProgramasInstructorController;
__decorate([
    (0, common_1.Post)(),
    (0, role_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_programas_instructor_dto_1.CreateProgramasInstructorDto]),
    __metadata("design:returntype", Promise)
], ProgramasInstructorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProgramasInstructorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProgramasInstructorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, role_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_programas_instructor_dto_1.UpdateProgramasInstructorDto]),
    __metadata("design:returntype", void 0)
], ProgramasInstructorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, role_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProgramasInstructorController.prototype, "remove", null);
exports.ProgramasInstructorController = ProgramasInstructorController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_guard_1.RolesGuard),
    (0, common_1.Controller)('programas-instructor'),
    __metadata("design:paramtypes", [programas_instructor_service_1.ProgramasInstructorService])
], ProgramasInstructorController);
//# sourceMappingURL=programas-instructor.controller.js.map