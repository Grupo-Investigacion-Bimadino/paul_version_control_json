import { CreateVcDto } from './dto/create-vc.dto';
import { UpdateVcDto } from './dto/update-vc.dto';
import { JsonVersionControlService } from './json-version-control/json-version-control.service';
export declare class VcsService {
    private jsonVersionControlService;
    constructor(jsonVersionControlService: JsonVersionControlService);
    createVersion(createVcDto: CreateVcDto): string;
    findAllVersions(): string;
    findOneVersion(id: number): string;
    updateVersion(id: number, updateVcDto: UpdateVcDto): string;
    removeVersion(id: number): string;
}
