import { CreateArchivoDto } from './dto/create-archivo.dto';
import { UpdateArchivoDto } from './dto/update-archivo.dto';
import { Archivo } from './entities/archivo.entity';
import { Resultado } from 'src/resultados/entities/resultado.entity';
import { Repository } from 'typeorm';
export declare class ArchivoService {
    private readonly archivoRepository;
    private readonly resultadoRepository;
    constructor(archivoRepository: Repository<Archivo>, resultadoRepository: Repository<Resultado>);
    create(createArchivoDto: CreateArchivoDto, id: number): Promise<Archivo>;
    findAll(): string;
    findAllarchresultado(id: number): Promise<Archivo[]>;
    update(id: number, updateArchivoDto: UpdateArchivoDto): string;
    borrarArchivo(publicId: string, id: number): Promise<any>;
    remove(id: number): Promise<Archivo>;
}
