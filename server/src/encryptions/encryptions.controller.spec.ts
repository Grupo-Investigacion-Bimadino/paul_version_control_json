import { Test, TestingModule } from '@nestjs/testing';
import { EncryptionsController } from './encryptions.controller';
import { CreateEncryptionsDto, UpdateEncryptionsDto } from './dto';

describe('EncryptionsController', () => {
  let controller: EncryptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EncryptionsController],
    }).compile();

    controller = module.get<EncryptionsController>(EncryptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    @Controller('encryptions')

export class EncryptionsController {
constructor(private readonly encryptionsService: EncryptionsService) {}
@Get()
findAll() {
return this.encryptionsService.findAll();
}
@Get(':id')
findOne(@Param('id') id: string) {
return this.encryptionsService.findOne(id);
}
@Post()
create(@Body() createEncryptionsDto: CreateEncryptionsDto) {
return this.encryptionsService.create(createEncryptionsDto);
}
@Put(':id')
update(@Param('id') id: string, @Body() updateEncryptionsDto: UpdateEncryptionsDto) {
return this.encryptionsService.update(id, updateEncryptionsDto);
}
@Delete(':id')
remove(@Param('id') id: string) {
return this.encryptionsService.remove(id);

  });
});
