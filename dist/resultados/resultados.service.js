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
exports.ResultadosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const resultado_entity_1 = require("./entities/resultado.entity");
const typeorm_2 = require("typeorm");
const competencia_entity_1 = require("../competencia/entities/competencia.entity");
const programa_entity_1 = require("../programa/entities/programa.entity");
let ResultadosService = class ResultadosService {
    constructor(resultadoRepository, competenciaRepository, programaRepository) {
        this.resultadoRepository = resultadoRepository;
        this.competenciaRepository = competenciaRepository;
        this.programaRepository = programaRepository;
    }
    async create(createResultadoDto, competenciaId, programaId) {
        const programa = await this.programaRepository.findOne({ where: { id: programaId } });
        if (!programa) {
            throw new common_1.NotFoundException('Programa no encontrado');
        }
        const competencia = await this.competenciaRepository.findOne({ where: { id: competenciaId } });
        if (!competencia) {
            throw new Error('Competencia not found');
        }
        const resul = this.resultadoRepository.create({
            ...createResultadoDto,
            competencia,
            programa
        });
        return await this.resultadoRepository.save(resul);
    }
    async findresultadoprocomp(idPrograma, idCompetencia) {
        const programa = await this.programaRepository.findOne({ where: { id: idPrograma } });
        if (!programa) {
            throw new common_1.NotFoundException('Programa no encontrado');
        }
        const competencia = await this.competenciaRepository.findOne({ where: { id: idCompetencia } });
        if (!competencia) {
            throw new common_1.NotFoundException('Competencia no encontrada');
        }
        return await this.resultadoRepository.find({
            where: { programa: { id: idPrograma },
                competencia: { id: idCompetencia },
            },
        });
    }
    findAll() {
        return `This action returns all resultados`;
    }
    findOne(id) {
        return `This action returns a #${id} resultado`;
    }
    async update(id, updateResultadoDto) {
        const resultado = await this.resultadoRepository.findOne({ where: { id: id } });
        if (!resultado) {
            throw new common_1.NotFoundException('Resultado no encontrado');
        }
        Object.assign(resultado, updateResultadoDto);
        return await this.resultadoRepository.save(resultado);
    }
    async remove(id) {
        const resultado = await this.resultadoRepository.findOne({ where: { id: id } });
        if (!resultado) {
            throw new common_1.NotFoundException('Resultado no encontrado');
        }
        await this.resultadoRepository.delete(id);
    }
};
exports.ResultadosService = ResultadosService;
exports.ResultadosService = ResultadosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(resultado_entity_1.Resultado)),
    __param(1, (0, typeorm_1.InjectRepository)(competencia_entity_1.Competencia)),
    __param(2, (0, typeorm_1.InjectRepository)(programa_entity_1.Programa)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ResultadosService);
//# sourceMappingURL=resultados.service.js.map