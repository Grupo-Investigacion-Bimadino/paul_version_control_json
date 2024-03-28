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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonVersionControlService = void 0;
const common_1 = require("@nestjs/common");
const { VersionControlSync } = require('json-version-control');
let JsonVersionControlService = class JsonVersionControlService {
    constructor() {
        this.vc = new VersionControlSync({
            sourceFilePath: './data/source.json',
            headFilePath: './data/head.json',
            historyDirectory: './data/history',
            diffFilePrefix: 'diff_',
        });
    }
    saveNewVersion(data) {
        this.vc.saveNewVersion(data);
    }
    getHistoryVersions() {
        return this.vc.getHistoryVersions();
    }
    getPreviousVersion() {
        return this.vc.getPreviousVersion();
    }
    getNextVersion() {
        return this.vc.getNextVersion();
    }
    applyVersionToSource(version) {
        this.vc.applyVersionToSource(version);
    }
    getInitialVersion() {
        return this.vc.getInitialVersion();
    }
    getLatestVersion() {
        return this.vc.getLatestVersion();
    }
    applyInitialVersion() {
        this.vc.applyInitialVersion();
    }
    applyLatestVersion() {
        this.vc.applyLatestVersion();
    }
};
exports.JsonVersionControlService = JsonVersionControlService;
exports.JsonVersionControlService = JsonVersionControlService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], JsonVersionControlService);
//# sourceMappingURL=json-version-control.service.js.map