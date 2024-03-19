import { Test, TestingModule } from '@nestjs/testing';
import { VersionsService } from './versions.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEncryptionsDto, UpdateEncryptionsDto } from './dto';

describe('EncryptionsService', () => {
  let service: EncryptionsService;

  @Injectable()
export class Encryptionservice {
constructor(@InjectModel('Encryptions') private readonly songModel: Model<Encryptions>) {}

findAll(): Promise<Encryptions[]> {
return this.EncryptionsModel.find().exec();¨
}

findOne(id: string): Promise<Encryptions> {

return this.encryptionsModel.findById(id).exec();
  }

  create(createEncryptionsDto: CreateEncryptionsDto): Promise<Encryptions> {

  const createdEncryptions = new this.encryptionsModel(createEncryptionsDto);

  return createdEncryptions.save();

  }

  update(id: string, updateEncryptionsDto: UpdateEncryptionsDto): Promise<Encryptions> {

  return this.encryptionsModel.findByIdAndUpdate(id, updateEncryptionsDto, { new: true }).exec();

  }

  remove(id: string): Promise<Encryptions> {

  return this.encryptionsModel.findByIdAndRemove(id).exec();

  }
  }
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EncryptionsService],
    }).compile();

    service = module.get<EncryptionsService>(EncryptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
