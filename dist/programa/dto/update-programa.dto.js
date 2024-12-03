"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProgramaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_programa_dto_1 = require("./create-programa.dto");
class UpdateProgramaDto extends (0, mapped_types_1.PartialType)(create_programa_dto_1.CreateProgramaDto) {
}
exports.UpdateProgramaDto = UpdateProgramaDto;
//# sourceMappingURL=update-programa.dto.js.map