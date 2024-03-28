import { VcsService } from './vcs.service';
import { CreateVcDto } from './dto/create-vc.dto';
import { UpdateVcDto } from './dto/update-vc.dto';
export declare class VcsController {
    private readonly vcsService;
    constructor(vcsService: VcsService);
    create(createVcDto: CreateVcDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateVcDto: UpdateVcDto): string;
    remove(id: string): string;
}
