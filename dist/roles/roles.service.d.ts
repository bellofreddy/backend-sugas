import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';
export declare class RolesService {
    private rolesRepository;
    constructor(rolesRepository: Repository<Role>);
    create(createRoleDto: CreateRoleDto): string;
    findAll(): Promise<Role[]>;
    findOne(id: number): Promise<Role>;
    update(id: number, updateRoleDto: UpdateRoleDto): string;
    remove(id: number): string;
}
