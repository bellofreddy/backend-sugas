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
exports.RoleSeedModule = void 0;
const common_1 = require("@nestjs/common");
const rol_seed_service_1 = require("./rol-seed.service");
const role_entity_1 = require("./entities/role.entity");
const typeorm_1 = require("@nestjs/typeorm");
let RoleSeedModule = class RoleSeedModule {
    constructor(roleSeedService) {
        this.roleSeedService = roleSeedService;
    }
    async onModuleInit() {
        await this.roleSeedService.createRoles();
    }
};
exports.RoleSeedModule = RoleSeedModule;
exports.RoleSeedModule = RoleSeedModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([role_entity_1.Role])],
        providers: [rol_seed_service_1.RoleSeedService],
        exports: [rol_seed_service_1.RoleSeedService],
    }),
    __metadata("design:paramtypes", [rol_seed_service_1.RoleSeedService])
], RoleSeedModule);
//# sourceMappingURL=rol-seed.module.js.map