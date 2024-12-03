import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';
import { Resultado } from './entities/resultado.entity';
import { Repository } from 'typeorm';
import { Competencia } from 'src/competencia/entities/competencia.entity';
import { Programa } from 'src/programa/entities/programa.entity';
export declare class ResultadosService {
    private resultadoRepository;
    private readonly competenciaRepository;
    private readonly programaRepository;
    constructor(resultadoRepository: Repository<Resultado>, competenciaRepository: Repository<Competencia>, programaRepository: Repository<Programa>);
    create(createResultadoDto: CreateResultadoDto, competenciaId: number, programaId: any): Promise<Resultado>;
    findresultadoprocomp(idPrograma: number, idCompetencia: number): Promise<Resultado[]>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateResultadoDto: UpdateResultadoDto): Promise<Resultado>;
    remove(id: number): Promise<void>;
}
