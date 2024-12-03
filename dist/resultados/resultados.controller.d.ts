import { ResultadosService } from './resultados.service';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';
export declare class ResultadosController {
    private readonly resultadosService;
    constructor(resultadosService: ResultadosService);
    create(createResultadoDto: CreateResultadoDto, competenciaId: number, programaId: number): Promise<import("./entities/resultado.entity").Resultado>;
    findAll(): string;
    findOne(id: string): string;
    findcomppro(idcomp: number, idprog: number): Promise<import("./entities/resultado.entity").Resultado[]>;
    update(id: string, updateResultadoDto: UpdateResultadoDto): Promise<import("./entities/resultado.entity").Resultado>;
    remove(id: number): Promise<void>;
}
