import { Resultado } from 'src/resultados/entities/resultado.entity';
export declare class Archivo {
    id: number;
    name: string;
    url: string;
    tamano: number;
    publicid: string;
    createdAt: Date;
    updatedAt: Date;
    resultadoId: Resultado;
}
