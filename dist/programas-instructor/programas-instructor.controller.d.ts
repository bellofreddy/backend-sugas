import { ProgramasInstructorService } from './programas-instructor.service';
import { CreateProgramasInstructorDto } from './dto/create-programas-instructor.dto';
import { UpdateProgramasInstructorDto } from './dto/update-programas-instructor.dto';
export declare class ProgramasInstructorController {
    private readonly programasInstructorService;
    constructor(programasInstructorService: ProgramasInstructorService);
    create(createProgramasInstructorDto: CreateProgramasInstructorDto): Promise<import("../usuarios/entities/usuario.entity").Usuario>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateProgramasInstructorDto: UpdateProgramasInstructorDto): string;
    remove(id: string): string;
}
