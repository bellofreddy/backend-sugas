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
exports.ProgramaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const programa_entity_1 = require("./entities/programa.entity");
const typeorm_2 = require("typeorm");
let ProgramaService = class ProgramaService {
    constructor(programaRepository) {
        this.programaRepository = programaRepository;
        this.programassena = [];
    }
    async create(createProgramaDto) {
        const pro = this.programaRepository.create(createProgramaDto);
        try {
            return this.programaRepository.save(pro);
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new common_1.ConflictException('Ya existe un programa con este código');
            }
        }
    }
    findAll() {
        return this.programaRepository.find({ relations: ['competencias'] });
    }
    async findProgramasByIds(programasIds) {
        return await this.programaRepository.find({
            where: {
                id: (0, typeorm_2.In)(programasIds),
            },
        });
    }
    async getCompetenciasPorPrograma(programaId) {
        const programa = await this.programaRepository.findOne({
            where: { id: programaId },
            relations: ['competencias'],
        });
        return programa ? programa.competencias : [];
    }
    findOne(id) {
        return this.programaRepository.findOne({ where: { id }, relations: ['competencias'] });
    }
    async update(id, updateProgramaDto) {
        console.log(id);
        const programa = await this.programaRepository.findOne({ where: { id } });
        if (!programa) {
            throw new common_1.NotFoundException(`Programa con ID ${id} no encontrado`);
        }
        Object.assign(programa, updateProgramaDto);
        return this.programaRepository.save(programa);
    }
    async remove(codigo) {
        const programa = await this.programaRepository.findOne({ where: { codigo: codigo } });
        if (!programa) {
            throw new common_1.NotFoundException(`Programa con código ${codigo} no encontrado`);
        }
        await this.programaRepository.remove(programa);
    }
};
exports.ProgramaService = ProgramaService;
exports.ProgramaService = ProgramaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(programa_entity_1.Programa)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProgramaService);
//# sourceMappingURL=programa.service.js.map