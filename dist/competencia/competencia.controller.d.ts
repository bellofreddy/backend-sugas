import { CompetenciaService } from './competencia.service';
import { CreateCompetenciaDto } from './dto/create-competencia.dto';
import { UpdateCompetenciaDto } from './dto/update-competencia.dto';
export declare class CompetenciaController {
    private readonly competenciaService;
    constructor(competenciaService: CompetenciaService);
    create(createCompetenciaDto: CreateCompetenciaDto): Promise<import("./entities/competencia.entity").Competencia>;
    findAll(): Promise<import("./entities/competencia.entity").Competencia[]>;
    findOne(id: string): Promise<import("./entities/competencia.entity").Competencia>;
    update(id: string, updateCompetenciaDto: UpdateCompetenciaDto): Promise<import("./entities/competencia.entity").Competencia>;
    remove(id: string): Promise<void>;
}
