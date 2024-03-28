"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVcDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_vc_dto_1 = require("./create-vc.dto");
class UpdateVcDto extends (0, mapped_types_1.PartialType)(create_vc_dto_1.CreateVcDto) {
}
exports.UpdateVcDto = UpdateVcDto;
//# sourceMappingURL=update-vc.dto.js.map