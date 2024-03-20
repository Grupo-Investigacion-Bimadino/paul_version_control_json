import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    Patch,
  } from '@nestjs/common';
  import { VersionsService } from './versions.service';
  
  @Controller('versions')
  export class VersionsController {
    constructor(private readonly versionsService: VersionsService) {}
    // find one by id findOne(id)
    @Get(':id')
    findOne(@Param('id') id: number): string {
      return this.versionsService.findOne(id);
    }
  
    @Get()
    findAll(): string {
      return this.versionsService.findAll();
    }
  
    @Post()
    create(@Body() createVersionsDto): string {
      return this.versionsService.create(createVersionsDto);
    }
  
    @Patch(':id')
    update(@Param('id') id: number, @Body() updateVersions): string {
      return this.versionsService.update(id, updateVersions);
    }
  
    @Delete(':id')
    delete(@Param('id') id: number): string {
      return this.versionsService.delete(id);
    }
  }
  