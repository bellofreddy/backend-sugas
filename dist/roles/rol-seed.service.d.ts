import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';
export declare class RoleSeedService {
    private readonly roleRepository;
    constructor(roleRepository: Repository<Role>);
    createRoles(): Promise<void>;
}
