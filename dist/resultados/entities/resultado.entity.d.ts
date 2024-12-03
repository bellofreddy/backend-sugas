import { Archivo } from 'src/archivo/entities/archivo.entity';
import { Competencia } from 'src/competencia/entities/competencia.entity';
import { Programa } from 'src/programa/entities/programa.entity';
export declare class Resultado {
    id: number;
    nombre: string;
    duracion: number;
    programa: Programa;
    competencia: Competencia;
    archivo: Archivo[];
}
