import { JwtService } from '@nestjs/jwt';
import { RegisterAuthDto } from './dto/register.dto';
import { LoginAuthDto } from './dto/login.dto';
import { RolesService } from 'src/roles/roles.service';
import { ProgramaService } from 'src/programa/programa.service';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { UpdatePasswordDto } from './dto/update-password.dto';
export declare class AuthService {
    private readonly usuarioService;
    private readonly rolesService;
    private readonly programaService;
    private readonly JwtService;
    constructor(usuarioService: UsuariosService, rolesService: RolesService, programaService: ProgramaService, JwtService: JwtService);
    register(registerAuthDto: RegisterAuthDto): Promise<import("../usuarios/entities/usuario.entity").Usuario>;
    cambiarContrasena(updatePasswordDto: UpdatePasswordDto): Promise<{
        message: string;
    }>;
    login(loginAuthDto: LoginAuthDto): Promise<{
        access_token: string;
        email: string;
        nombre: string;
        cedula: string;
        telefono: string;
        rol: string;
        id: number;
    }>;
}
