import { EncryptionsService } from './encryptions.service';
export declare class EncryptionsController {
    private readonly encryptionsService;
    constructor(encryptionsService: EncryptionsService);
    findOne(id: number): string;
    findAll(): string;
    create(createEncryptionsDto: any): string;
    update(id: number, updateEncryptions: any): string;
    delete(id: number): string;
}
