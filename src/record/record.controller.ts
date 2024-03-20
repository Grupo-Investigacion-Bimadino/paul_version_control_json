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
  import { RecordService } from './record.service';
  
  @Controller('record')
  export class RecordController {
    constructor(private readonly recordService: RecordService) {}
    // find one by id findOne(id)
    @Get(':id')
    findOne(@Param('id') id: number): string {
      return this.recordService.findOne(id);
    }
  
    @Get()
    findAll(): string {
      return this.recordService.findAll();
    }
  
    @Post()
    create(@Body() createRecordDto): string {
      return this.recordService.create(createRecordDto);
    }
  
    @Patch(':id')
    update(@Param('id') id: number, @Body() updateRecord): string {
      return this.recordService.update(id, updateRecord);
    }
  
    @Delete(':id')
    delete(@Param('id') id: number): string {
      return this.recordService.delete(id);
    }
  }
  