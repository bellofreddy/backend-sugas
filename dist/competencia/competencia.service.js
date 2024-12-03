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
exports.CompetenciaService = void 0;
const common_1 = require("@nestjs/common");
const competencia_entity_1 = require("./entities/competencia.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let CompetenciaService = class CompetenciaService {
    constructor(competenciaRepository) {
        this.competenciaRepository = competenciaRepository;
    }
    async create(createCompetenciaDto) {
        return this.competenciaRepository.save(createCompetenciaDto);
    }
    findAll() {
        return this.competenciaRepository.find({ relations: ['programas'] });
    }
    findOne(codigo) {
        return this.competenciaRepository.findOne({ where: { codigo }, relations: ['programas'] });
    }
    async update(id, updateCompetenciaDto) {
        const compe = await this.competenciaRepository.findOne({ where: { id } });
        if (!compe) {
            throw new common_1.NotFoundException(`Competencia con ID ${id} no encontrado`);
        }
        Object.assign(compe, updateCompetenciaDto);
        return this.competenciaRepository.save(compe);
    }
    async remove(codigo) {
        const competencia = await this.competenciaRepository.findOne({ where: { codigo: codigo } });
        if (!competencia) {
            throw new common_1.NotFoundException(`Programa con código ${codigo} no encontrado`);
        }
        await this.competenciaRepository.remove(competencia);
    }
};
exports.CompetenciaService = CompetenciaService;
exports.CompetenciaService = CompetenciaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(competencia_entity_1.Competencia)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CompetenciaService);
//# sourceMappingURL=competencia.service.js.map