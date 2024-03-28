import { RecordService } from './record.service';
export declare class RecordController {
    private readonly recordService;
    constructor(recordService: RecordService);
    findOne(id: number): string;
    findAll(): string;
    create(createRecordDto: any): string;
    update(id: number, updateRecord: any): string;
    delete(id: number): string;
}
