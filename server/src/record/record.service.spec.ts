import { Test, TestingModule } from '@nestjs/testing';
import { RecordService } from './record.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRecordDto, UpdateRecordDto } from './dto';

describe('RecordService', () => {
  let service: RecordService;

  @Injectable()
export class RecordService {
constructor(@InjectModel('record') private readonly recordModel: Model<Record>) {}

findAll(): Promise<Record[]> {
return this.RecordModel.find().exec();¨
}

findOne(id: string): Promise<Record> {

return this.recordModel.findById(id).exec();
  }

  create(createRecordDto: CreateRecordDto): Promise<Record> {

  const createdRecord = new this.recordModel(createRecordDto);

  return createdRecord.save();

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
