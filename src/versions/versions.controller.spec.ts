import { Test, TestingModule } from '@nestjs/testing';
import { VersionsController } from './versions.controller';
import { CreateVersionsDto, UpdateVersionsDto } from './dto';

describe('VersionsController', () => {
  let controller: VersionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VersionsController],
    }).compile();

    controller = module.get<VersionsController>(VersionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    @Controller('songs')

export class VersionsController {
constructor(private readonly versionsService: VersionsService) {}
@Get()
findAll() {
return this.versionsService.findAll();
}
@Get(':id')
findOne(@Param('id') id: string) {
return this.versionsService.findOne(id);
}
@Post()
create(@Body() createVersionsDto: CreateVersionsDto) {
return this.versionsService.create(createVersionsDto);
}
@Put(':id')
update(@Param('id') id: string, @Body() updateVersionsDto: UpdateVersionsDto) {
return this.versionsService.update(id, updateVersionsDto);
}
@Delete(':id')
remove(@Param('id') id: string) {
return this.versionsService.remove(id);

  });
});
