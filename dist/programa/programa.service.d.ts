import { CreateProgramaDto } from './dto/create-programa.dto';
import { UpdateProgramaDto } from './dto/update-programa.dto';
import { Programa } from './entities/programa.entity';
import { Repository } from 'typeorm';
import { Competencia } from 'src/competencia/entities/competencia.entity';
export declare class ProgramaService {
    private programaRepository;
    programassena: any[];
    constructor(programaRepository: Repository<Programa>);
    create(createProgramaDto: CreateProgramaDto): Promise<Programa>;
    findAll(): Promise<Programa[]>;
    findProgramasByIds(programasIds: number[]): Promise<Programa[]>;
    getCompetenciasPorPrograma(programaId: number): Promise<Competencia[]>;
    findOne(id: number): Promise<Programa>;
    update(id: number, updateProgramaDto: UpdateProgramaDto): Promise<Programa>;
    remove(codigo: string): Promise<void>;
}
