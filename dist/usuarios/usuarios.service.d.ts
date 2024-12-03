import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { ProgramaService } from 'src/programa/programa.service';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
export declare class UsuariosService {
    private userRepository;
    private readonly programaService;
    private readonly mailerService;
    private readonly configService;
    private readonly jwtService;
    constructor(userRepository: Repository<Usuario>, programaService: ProgramaService, mailerService: MailerService, configService: ConfigService, jwtService: JwtService);
    create(createUserDto: CreateUsuarioDto): Promise<Usuario>;
    findAll(): Promise<Usuario[]>;
    recuperarContrasena(email: string): Promise<any>;
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
    findProgramasAsignados(id: number): Promise<import("../programa/entities/programa.entity").Programa[]>;
    findProgramasNoAsignados(id: number): Promise<import("../programa/entities/programa.entity").Programa[]>;
    findOne(id: number): Promise<Usuario>;
    findByEmail(email: string): Promise<Usuario>;
    update(updateUserDto: UpdateUsuarioDto): Promise<Usuario>;
    remove(id: number): string;
}
