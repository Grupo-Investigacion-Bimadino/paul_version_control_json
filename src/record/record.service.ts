import { Injectable } from '@nestjs/common';

@Injectable()
export class RecordService {
  private record: any[] = [];

  findOne(id: number): string {
    return `Get record with id ${id}`;
  }

  findAll(): string {
    return 'Get all record';
  }

  create(createRecordDto): string {
    this.record.push(createRecordDto);
    return 'record created successfully';
  }

  update(id, updateVersions): string {
    return 'Record updated successfully';
  }

  delete(id): string {
    return 'Record deleted successfully';
  }
}
