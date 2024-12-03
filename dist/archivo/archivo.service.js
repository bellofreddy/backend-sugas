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
exports.ArchivoService = void 0;
const common_1 = require("@nestjs/common");
const archivo_entity_1 = require("./entities/archivo.entity");
const resultado_entity_1 = require("../resultados/entities/resultado.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cloudinary_config_1 = require("../cloudinary.config");
let ArchivoService = class ArchivoService {
    constructor(archivoRepository, resultadoRepository) {
        this.archivoRepository = archivoRepository;
        this.resultadoRepository = resultadoRepository;
    }
    async create(createArchivoDto, id) {
        const resultadoId = await this.resultadoRepository.findOne({ where: { id } });
        if (!resultadoId) {
            throw new common_1.NotFoundException('Resultado not found');
        }
        const nuevoArchivo = this.archivoRepository.create({
            ...createArchivoDto,
            resultadoId,
        });
        return await this.archivoRepository.save(nuevoArchivo);
    }
    findAll() {
        return `This action returns all archivo`;
    }
    async findAllarchresultado(id) {
        const resultadoId = await this.resultadoRepository.findOne({ where: { id } });
        if (!resultadoId) {
            throw new common_1.NotFoundException('Resultado not found');
        }
        return await this.archivoRepository.find({
            where: { resultadoId },
        });
    }
    update(id, updateArchivoDto) {
        return `This action updates a #${id} archivo`;
    }
    async borrarArchivo(publicId, id) {
        try {
            const result = await cloudinary_config_1.default.uploader.destroy(publicId, {
                resource_type: 'raw',
            });
            return result;
        }
        catch (error) {
            console.error('Error al eliminar el archivo:', error);
            throw error;
        }
    }
    async remove(id) {
        const archivo = await this.archivoRepository.findOne({ where: { id } });
        const r = this.borrarArchivo(archivo.publicid, archivo.id);
        if (r)
            return await this.archivoRepository.remove(archivo);
    }
};
exports.ArchivoService = ArchivoService;
exports.ArchivoService = ArchivoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(archivo_entity_1.Archivo)),
    __param(1, (0, typeorm_1.InjectRepository)(resultado_entity_1.Resultado)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ArchivoService);
//# sourceMappingURL=archivo.service.js.map