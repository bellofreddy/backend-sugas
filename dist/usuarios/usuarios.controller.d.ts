import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuariosService } from './usuarios.service';
export declare class UsuariosController {
    private readonly userService;
    constructor(userService: UsuariosService);
    create(createUserDto: CreateUsuarioDto): Promise<import("./entities/usuario.entity").Usuario>;
    findAll(): Promise<import("./entities/usuario.entity").Usuario[]>;
    findOne(id: string): Promise<import("./entities/usuario.entity").Usuario>;
    puedeRecuperar(cedula: string, token: string): Promise<{
        puede: boolean;
        message: string;
        ex: any;
        email?: undefined;
    } | {
        puede: boolean;
        message: any;
        ex: any;
        email: string;
    }>;
    recuperarContrasena(email: string): Promise<any>;
    findProgramasAsignados(id: string): Promise<import("../programa/entities/programa.entity").Programa[]>;
    findProgramasNoAsignados(id: string): Promise<import("../programa/entities/programa.entity").Programa[]>;
    remove(id: string): string;
}
