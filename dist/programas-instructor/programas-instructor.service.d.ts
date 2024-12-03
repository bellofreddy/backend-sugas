import { CreateProgramasInstructorDto } from './dto/create-programas-instructor.dto';
import { UpdateProgramasInstructorDto } from './dto/update-programas-instructor.dto';
import { ProgramaService } from 'src/programa/programa.service';
import { Repository } from 'typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { UsuariosService } from 'src/usuarios/usuarios.service';
export declare class ProgramasInstructorService {
    private readonly programaService;
    private readonly userService;
    private userRepository;
    constructor(programaService: ProgramaService, userService: UsuariosService, userRepository: Repository<Usuario>);
    AsignarProgramasAInstructor(createProgramasInstructorDto: CreateProgramasInstructorDto): Promise<Usuario>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProgramasInstructorDto: UpdateProgramasInstructorDto): string;
    remove(id: number): string;
}
