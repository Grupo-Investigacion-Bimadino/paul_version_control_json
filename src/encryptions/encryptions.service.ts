import { Injectable } from '@nestjs/common';

@Injectable()
export class EncryptionsService {
  private encryptions: any[] = [];

  findOne(id: number): string {
    return `Get encryptions with id ${id}`;
  }

  findAll(): string {
    return 'Get all encryptions';
  }

  create(createEncryptionsDto): string {
    this.encryptions.push(createEncryptionsDto);
    return 'encryptions created successfully';
  }

  update(id, updateEncryptions): string {
    return 'Encryptions updated successfully';
  }

  delete(id): string {
    return 'Encryptions deleted successfully';
  }
}
