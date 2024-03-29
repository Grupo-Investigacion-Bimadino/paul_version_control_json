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
exports.EncryptionsSchema = exports.Encryptions = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mongoose_3 = require("mongoose");
let Encryptions = class Encryptions extends mongoose_2.Document {
};
exports.Encryptions = Encryptions;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Encryptions.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Encryptions.prototype, "tittle", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Encryptions.prototype, "body", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_3.default.Types.ObjectId, ref: 'user' }),
    (0, mongoose_1.Prop)({ type: String, enum: ['DRAFT', 'PUBLISHED', 'DELETE'] }),
    __metadata("design:type", String)
], Encryptions.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Encryptions.prototype, "created_at", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Encryptions.prototype, "updated_at", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_3.default.Types.ObjectId, ref: 'Resource' }),
    __metadata("design:type", Array)
], Encryptions.prototype, "Recources", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Encryptions.prototype, "kerwords", void 0);
exports.Encryptions = Encryptions = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true
    })
], Encryptions);
exports.EncryptionsSchema = mongoose_1.SchemaFactory.createForClass(Encryptions);
//# sourceMappingURL=encryptions.schemas.js.map