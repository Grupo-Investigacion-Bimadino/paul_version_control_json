"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptionsService = void 0;
const common_1 = require("@nestjs/common");
let EncryptionsService = class EncryptionsService {
    constructor() {
        this.encryptions = [];
    }
    findOne(id) {
        return `Get encryptions with id ${id}`;
    }
    findAll() {
        return 'Get all encryptions';
    }
    create(createEncryptionsDto) {
        this.encryptions.push(createEncryptionsDto);
        return 'encryptions created successfully';
    }
    update(id, updateEncryptions) {
        return 'Encryptions updated successfully';
    }
    delete(id) {
        return 'Encryptions deleted successfully';
    }
};
exports.EncryptionsService = EncryptionsService;
exports.EncryptionsService = EncryptionsService = __decorate([
    (0, common_1.Injectable)()
], EncryptionsService);
//# sourceMappingURL=encryptions.service.js.map