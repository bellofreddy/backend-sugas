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
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const role_decorator_1 = require("../decorator/role.decorator");
const jwt_1 = require("@nestjs/jwt");
let RolesGuard = class RolesGuard {
    constructor(reflector, jwtService) {
        this.reflector = reflector;
        this.jwtService = jwtService;
    }
    async canActivate(context) {
        const requiredRoles = this.reflector.getAllAndOverride(role_decorator_1.ROLES_KEY, [context.getHandler(), context.getClass()]);
        if (!requiredRoles) {
            return true;
        }
        try {
            const request = context.switchToHttp().getRequest();
            const token = request.headers.authorization?.split(' ')[1];
            if (!token) {
                throw new common_1.UnauthorizedException('No credentials provided');
            }
            const user = await this.jwtService.verifyAsync(token);
            const userRole = user.rol;
            const hasRole = requiredRoles.some((roles) => userRole === roles);
            if (!hasRole) {
                throw new common_1.ForbiddenException('You do not have access to this resource');
            }
            return true;
        }
        catch (error) {
            if (error.name === 'TokenExpiredError') {
                throw new common_1.UnauthorizedException('Token has expired');
            }
            else if (error.name === 'JsonWebTokenError') {
                throw new common_1.UnauthorizedException('Invalid token');
            }
            throw error;
        }
    }
};
exports.RolesGuard = RolesGuard;
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector, jwt_1.JwtService])
], RolesGuard);
//# sourceMappingURL=role-guard.guard.js.map