import { Test, TestingModule } from '@nestjs/testing';
import { VersionsService } from './versions.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVersionsDto, UpdateVersionsDto } from './dto';

describe('VersionsService', () => {
  let service: VersionsService;

  @Injectable()
export class SongsService {
constructor(@InjectModel('Song') private readonly songModel: Model<Song>) {}

findAll(): Promise<Versions[]> {
return this.VersionsModel.find().exec();¨
}

findOne(id: string): Promise<Versions> {

return this.versionsModel.findById(id).exec();
  }

  create(createVersionsDto: CreateVersionsDto): Promise<Verions> {

  const createdVersions = new this.versionsModel(createVersionsDto);

  return createdVersions.save();

  }

  update(id: string, updateVersionsDto: UpdateVersionsDto): Promise<Versions> {

  return this.versionsModel.findByIdAndUpdate(id, updateVersionsDto, { new: true }).exec();

  }

  remove(id: string): Promise<Versions> {

  return this.versionsModel.findByIdAndRemove(id).exec();

  }
  }
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VersionsService],
    }).compile();

    service = module.get<VersionsService>(VersionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
