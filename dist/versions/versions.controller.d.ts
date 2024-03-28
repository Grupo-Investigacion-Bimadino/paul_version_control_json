import { VersionsService } from './versions.service';
export declare class VersionsController {
    private readonly versionsService;
    constructor(versionsService: VersionsService);
    findOne(id: number): string;
    findAll(): string;
    create(createVersionsDto: any): string;
    update(id: number, updateVersions: any): string;
    delete(id: number): string;
}
