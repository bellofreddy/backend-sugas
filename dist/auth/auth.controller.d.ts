import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register.dto';
import { LoginAuthDto } from './dto/login.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    Register(registerAuthDto: RegisterAuthDto): Promise<import("../usuarios/entities/usuario.entity").Usuario>;
    cambiarContrasena(updatePasswordDto: UpdatePasswordDto): Promise<{
        message: string;
    }>;
    Login(loginAuthDto: LoginAuthDto): Promise<{
        access_token: string;
        email: string;
        nombre: string;
        cedula: string;
        telefono: string;
        rol: string;
        id: number;
    }>;
}
