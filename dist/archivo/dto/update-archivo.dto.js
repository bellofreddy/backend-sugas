"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateArchivoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_archivo_dto_1 = require("./create-archivo.dto");
class UpdateArchivoDto extends (0, mapped_types_1.PartialType)(create_archivo_dto_1.CreateArchivoDto) {
}
exports.UpdateArchivoDto = UpdateArchivoDto;
//# sourceMappingURL=update-archivo.dto.js.map