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
exports.VcsController = void 0;
const common_1 = require("@nestjs/common");
const vcs_service_1 = require("./vcs.service");
const create_vc_dto_1 = require("./dto/create-vc.dto");
const update_vc_dto_1 = require("./dto/update-vc.dto");
let VcsController = class VcsController {
    constructor(vcsService) {
        this.vcsService = vcsService;
    }
    create(createVcDto) {
        return this.vcsService.createVersion(createVcDto);
    }
    findAll() {
        return this.vcsService.findAllVersions();
    }
    findOne(id) {
        return this.vcsService.findOneVersion(+id);
    }
    update(id, updateVcDto) {
        return this.vcsService.updateVersion(+id, updateVcDto);
    }
    remove(id) {
        return this.vcsService.removeVersion(+id);
    }
};
exports.VcsController = VcsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vc_dto_1.CreateVcDto]),
    __metadata("design:returntype", void 0)
], VcsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VcsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VcsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_vc_dto_1.UpdateVcDto]),
    __metadata("design:returntype", void 0)
], VcsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VcsController.prototype, "remove", null);
exports.VcsController = VcsController = __decorate([
    (0, common_1.Controller)('vcs'),
    __metadata("design:paramtypes", [vcs_service_1.VcsService])
], VcsController);
//# sourceMappingURL=vcs.controller.js.map