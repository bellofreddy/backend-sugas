"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramacompetenciaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const programa_entity_1 = require("../programa/entities/programa.entity");
const competencia_entity_1 = require("../competencia/entities/competencia.entity");
let ProgramacompetenciaService = class ProgramacompetenciaService {
    constructor(programaRepository, competenciaRepository) {
        this.programaRepository = programaRepository;
        this.competenciaRepository = competenciaRepository;
    }
    async create(createProgramacompetenciaDto) {
        const pro = await this.programaRepository.findOne({ where: { id: createProgramacompetenciaDto.programaId }, relations: ['competencias'] });
        if (!pro) {
            throw new common_1.NotFoundException('Programa no encontrado');
        }
        for (let idc of createProgramacompetenciaDto.competenciaId) {
            const comp = await this.competenciaRepository.findOne({ where: { id: idc } });
            if (!comp) {
                throw new Error('User or Group not found');
            }
            pro.competencias.push(comp);
        }
        return await this.programaRepository.save(pro);
    }
    findAll() {
        return `This action returns all programacompetencia`;
    }
    findOne(programaId) {
        return 'ok';
    }
    update(id, updateProgramacompetenciaDto) {
        return `This action updates a #${id} programacompetencia`;
    }
    async remove(programId, competenciaId) {
        console.log(programId, competenciaId);
        const programa = await this.programaRepository.findOne({
            where: { id: programId },
            relations: ['competencias'],
        });
        console.log(programa);
        if (!programa) {
            throw new Error('Programa not found');
        }
        programa.competencias = programa.competencias.filter(competencia => competencia.id != competenciaId);
        console.log(programa);
        return await this.programaRepository.save(programa);
    }
};
exports.ProgramacompetenciaService = ProgramacompetenciaService;
exports.ProgramacompetenciaService = ProgramacompetenciaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(programa_entity_1.Programa)),
    __param(1, (0, typeorm_1.InjectRepository)(competencia_entity_1.Competencia)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProgramacompetenciaService);
//# sourceMappingURL=programacompetencia.service.js.map