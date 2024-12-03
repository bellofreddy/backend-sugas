"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const roles_module_1 = require("../roles/roles.module");
const programa_module_1 = require("../programa/programa.module");
const usuarios_controller_1 = require("./usuarios.controller");
const usuarios_service_1 = require("./usuarios.service");
const usuario_entity_1 = require("./entities/usuario.entity");
const mailer_1 = require("@nestjs-modules/mailer");
const pug_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/pug.adapter");
const config_1 = require("@nestjs/config");
let UsuariosModule = class UsuariosModule {
};
exports.UsuariosModule = UsuariosModule;
exports.UsuariosModule = UsuariosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([usuario_entity_1.Usuario]),
            roles_module_1.RolesModule,
            programa_module_1.ProgramaModule,
            mailer_1.MailerModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    transport: {
                        host: configService.get('HOST_EMAIL'),
                        port: 587,
                        secure: false,
                        auth: {
                            user: configService.get('EMAIL_REMITENTE'),
                            pass: configService.get('PASSWORD_EMAIL_REMITENTE'),
                        },
                    },
                    defaults: {
                        from: `'SUGAS' ${configService.get('EMAIL_REMITENTE')}`,
                    },
                    template: {
                        dir: './templates/',
                        adapter: new pug_adapter_1.PugAdapter(),
                        options: {
                            strict: true,
                        },
                    },
                }), inject: [config_1.ConfigService]
            })
        ],
        controllers: [usuarios_controller_1.UsuariosController],
        providers: [usuarios_service_1.UsuariosService],
        exports: [usuarios_service_1.UsuariosService],
    })
], UsuariosModule);
//# sourceMappingURL=usuarios.module.js.map