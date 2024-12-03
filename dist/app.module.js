"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const programa_module_1 = require("./programa/programa.module");
const typeorm_1 = require("@nestjs/typeorm");
const competencia_module_1 = require("./competencia/competencia.module");
const resultados_module_1 = require("./resultados/resultados.module");
const programacompetencia_module_1 = require("./programacompetencia/programacompetencia.module");
const archivo_module_1 = require("./archivo/archivo.module");
const auth_module_1 = require("./auth/auth.module");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const roles_module_1 = require("./roles/roles.module");
const rol_seed_module_1 = require("./roles/rol-seed.module");
const path_1 = require("path");
const config_1 = require("@nestjs/config");
const serve_static_1 = require("@nestjs/serve-static");
const programas_instructor_module_1 = require("./programas-instructor/programas-instructor.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'templates'),
                serveRoot: '/public/'
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'gguias',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            programa_module_1.ProgramaModule,
            competencia_module_1.CompetenciaModule,
            resultados_module_1.ResultadosModule,
            programacompetencia_module_1.ProgramacompetenciaModule,
            archivo_module_1.ArchivoModule,
            auth_module_1.AuthModule,
            usuarios_module_1.UsuariosModule,
            roles_module_1.RolesModule,
            rol_seed_module_1.RoleSeedModule,
            programas_instructor_module_1.ProgramasInstructorModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map