import { Injectable } from '@nestjs/common';
import { CreateVcDto } from './dto/create-vc.dto';
import { UpdateVcDto } from './dto/update-vc.dto';
import { JsonVersionControlService } from './json-version-control/json-version-control.service';

@Injectable()
export class VcsService {

  constructor(private jsonVersionControlService: JsonVersionControlService) { }

  createVersion(createVcDto: CreateVcDto) {
    return 'This action adds a new vc';
  }

  findAllVersions() {
    return `This action returns all vcs`;
  }

  findOneVersion(id: number) {
    return `This action returns a #${id} vc`;
  }

  updateVersion(id: number, updateVcDto: UpdateVcDto) {
    return `This action updates a #${id} vc`;
  }

  removeVersion(id: number) {
    return `This action removes a #${id} vc`;
  }
}
