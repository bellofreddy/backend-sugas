import { CreateCompetenciaDto } from './dto/create-competencia.dto';
import { UpdateCompetenciaDto } from './dto/update-competencia.dto';
import { Competencia } from './entities/competencia.entity';
import { Repository } from 'typeorm';
export declare class CompetenciaService {
    private competenciaRepository;
    constructor(competenciaRepository: Repository<Competencia>);
    create(createCompetenciaDto: CreateCompetenciaDto): Promise<Competencia>;
    findAll(): Promise<Competencia[]>;
    findOne(codigo: string): Promise<Competencia>;
    update(id: number, updateCompetenciaDto: UpdateCompetenciaDto): Promise<Competencia>;
    remove(codigo: string): Promise<void>;
}
