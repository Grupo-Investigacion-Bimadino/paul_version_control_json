"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionsService = void 0;
const common_1 = require("@nestjs/common");
let VersionsService = class VersionsService {
    constructor() {
        this.versions = [];
    }
    findOne(id) {
        return `Get versions with id ${id}`;
    }
    findAll() {
        return 'Get all versions';
    }
    create(createVersionsDto) {
        this.versions.push(createVersionsDto);
        return 'Versions created successfully';
    }
    update(id, updateVersions) {
        return 'Versions updated successfully';
    }
    delete(id) {
        return 'Versions deleted successfully';
    }
};
exports.VersionsService = VersionsService;
exports.VersionsService = VersionsService = __decorate([
    (0, common_1.Injectable)()
], VersionsService);
//# sourceMappingURL=versions.service%20copy.js.map