import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VcsService } from './vcs.service';
import { CreateVcDto } from './dto/create-vc.dto';
import { UpdateVcDto } from './dto/update-vc.dto';

@Controller('vcs')
export class VcsController {
  constructor(private readonly vcsService: VcsService) { }

  @Post()
  create(@Body() createVcDto: CreateVcDto) {
    return this.vcsService.createVersion(createVcDto);
  }

  @Get()
  findAll() {
    return this.vcsService.findAllVersions();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vcsService.findOneVersion(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVcDto: UpdateVcDto) {
    return this.vcsService.updateVersion(+id, updateVcDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vcsService.removeVersion(+id);
  }
}
