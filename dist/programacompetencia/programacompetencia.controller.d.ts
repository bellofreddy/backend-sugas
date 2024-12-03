import { ProgramacompetenciaService } from './programacompetencia.service';
import { CreateProgramacompetenciaDto } from './dto/create-programacompetencia.dto';
import { UpdateProgramacompetenciaDto } from './dto/update-programacompetencia.dto';
export declare class ProgramacompetenciaController {
    private readonly programacompetenciaService;
    constructor(programacompetenciaService: ProgramacompetenciaService);
    create(createProgramacompetenciaDto: CreateProgramacompetenciaDto): Promise<import("../programa/entities/programa.entity").Programa>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateProgramacompetenciaDto: UpdateProgramacompetenciaDto): string;
    removeRole(programId: number, competenciaId: number): Promise<import("../programa/entities/programa.entity").Programa>;
}
