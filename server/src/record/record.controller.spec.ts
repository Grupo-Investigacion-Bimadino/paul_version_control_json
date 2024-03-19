import { Test, TestingModule } from '@nestjs/testing';
import { RecordController } from './record.controller';
import { CreateRecordDto, UpdateRecordDto } from './dto';

describe('RecordController', () => {
  let controller: RecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecordController],
    }).compile();

    controller = module.get<RecordController>(RecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    @Controller('record')

export class RecordController {
constructor(private readonly recordService: RecordService) {}
@Get()

findAll() {
return this.recordService.findAll();
}
@Get(':id')
findOne(@Param('id') id: string) {
return this.recordService.findOne(id);
}
@Post()
create(@Body() createRecordsto: CreateRecordDto) {
return this.recordService.create(createRecordDto);
}
@Put(':id')
update(@Param('id') id: string, @Body() updateRecordDto: UpdateRecordDto) {
return this.recordService.update(id, updateRecordDto);
}
@Delete(':id')
remove(@Param('id') id: string) {
return this.recordService.remove(id);

  });
});
