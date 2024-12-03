import { OnModuleInit } from '@nestjs/common';
import { RoleSeedService } from './rol-seed.service';
export declare class RoleSeedModule implements OnModuleInit {
    private readonly roleSeedService;
    constructor(roleSeedService: RoleSeedService);
    onModuleInit(): Promise<void>;
}
