import { Injectable } from '@nestjs/common';

@Injectable()
export class VersionsService {
  private versions: any[] = [];

  findOne(id: number): string {
    return `Get versions with id ${id}`;
  }

  findAll(): string {
    return 'Get all versions';
  }

  create(createVersionsDto): string {
    this.versions.push(createVersionsDto);
    return 'Versions created successfully';
  }

  update(id, updateVersions): string {
    return 'Versions updated successfully';
  }

  delete(id): string {
    return 'Versions deleted successfully';
  }
}
