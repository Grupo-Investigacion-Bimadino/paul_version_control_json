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
  import { EncryptionsService } from './encryptions.service';
  
  @Controller('encryptions')
  export class EncryptionsController {
    constructor(private readonly encryptionsService: EncryptionsService) {}
    // find one by id findOne(id)
    @Get(':id')
    findOne(@Param('id') id: number): string {
      return this.encryptionsService.findOne(id);
    }
  
    @Get()
    findAll(): string {
      return this.encryptionsService.findAll();
    }
  
    @Post()
    create(@Body() createEncryptionsDto): string {
      return this.encryptionsService.create(createEncryptionsDto);
    }
  
    @Patch(':id')
    update(@Param('id') id: number, @Body() updateEncryptions): string {
      return this.encryptionsService.update(id, updateEncryptions);
    }
  
    @Delete(':id')
    delete(@Param('id') id: number): string {
      return this.encryptionsService.delete(id);
    }
  }
  