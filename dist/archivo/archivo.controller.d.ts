import { ArchivoService } from './archivo.service';
import { CreateArchivoDto } from './dto/create-archivo.dto';
import { UpdateArchivoDto } from './dto/update-archivo.dto';
export declare class ArchivoController {
    private readonly archivoService;
    constructor(archivoService: ArchivoService);
    create(createArchivoDto: CreateArchivoDto, id: number): Promise<import("./entities/archivo.entity").Archivo>;
    findAll(): string;
    findAllresultado(id: string): Promise<import("./entities/archivo.entity").Archivo[]>;
    update(id: string, updateArchivoDto: UpdateArchivoDto): string;
    remove(id: number): Promise<import("./entities/archivo.entity").Archivo>;
}
