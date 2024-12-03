import { Programa } from "src/programa/entities/programa.entity";
import { Resultado } from "src/resultados/entities/resultado.entity";
export declare class Competencia {
    id: number;
    codigo: string;
    nombre: string;
    duracion: number;
    programas: Programa[];
    resultado: Resultado[];
}
