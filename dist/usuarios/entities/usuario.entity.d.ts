import { Programa } from "src/programa/entities/programa.entity";
import { Role } from "src/roles/entities/role.entity";
export declare class Usuario {
    id: number;
    name: string;
    email: string;
    cedula: string;
    telefono: string;
    password: string;
    programa: Programa[];
    role: Role;
}
