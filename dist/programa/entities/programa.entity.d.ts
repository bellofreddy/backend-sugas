import { Competencia } from "src/competencia/entities/competencia.entity";
import { Resultado } from "src/resultados/entities/resultado.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";
export declare class Programa {
    id: number;
    nombre: string;
    codigo: string;
    version: number;
    resultados: Resultado[];
    competencias: Competencia[];
    usuario: Usuario;
}
