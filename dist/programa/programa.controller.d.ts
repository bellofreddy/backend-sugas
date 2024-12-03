import { ProgramaService } from './programa.service';
import { CreateProgramaDto } from './dto/create-programa.dto';
import { UpdateProgramaDto } from './dto/update-programa.dto';
export declare class ProgramaController {
    private readonly programaService;
    constructor(programaService: ProgramaService);
    create(createProgramaDto: CreateProgramaDto): Promise<import("./entities/programa.entity").Programa>;
    findAll(): Promise<import("./entities/programa.entity").Programa[]>;
    getCompetenciasPorPrograma(programaId: string): Promise<import("../competencia/entities/competencia.entity").Competencia[]>;
    findOne(id: string): Promise<import("./entities/programa.entity").Programa>;
    update(id: string, updateProgramaDto: UpdateProgramaDto): Promise<import("./entities/programa.entity").Programa>;
    remove(id: string): Promise<void>;
}
