import { CreateProgramacompetenciaDto } from './dto/create-programacompetencia.dto';
import { UpdateProgramacompetenciaDto } from './dto/update-programacompetencia.dto';
import { Repository } from 'typeorm';
import { Programa } from 'src/programa/entities/programa.entity';
import { Competencia } from 'src/competencia/entities/competencia.entity';
export declare class ProgramacompetenciaService {
    private programaRepository;
    private competenciaRepository;
    constructor(programaRepository: Repository<Programa>, competenciaRepository: Repository<Competencia>);
    create(createProgramacompetenciaDto: CreateProgramacompetenciaDto): Promise<Programa>;
    findAll(): string;
    findOne(programaId: number): string;
    update(id: number, updateProgramacompetenciaDto: UpdateProgramacompetenciaDto): string;
    remove(programId: number, competenciaId: number): Promise<Programa>;
}
