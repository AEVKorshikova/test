import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { DinoService } from './dino.service';
import { CreateDinoDto } from './dto/create-dino.dto';
import { UpdateDinoDto } from './dto/update-dino.dto';
import { query } from 'express';

@Controller('dino')
export class DinoController {
  constructor(private readonly dinoService: DinoService) {}

  @Post()
  create(@Body() createDinoDto: CreateDinoDto) {
    return this.dinoService.create(createDinoDto);
  }

  @Get()
  findAll() {
    return this.dinoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dinoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDinoDto: UpdateDinoDto) {
    return this.dinoService.update(+id, updateDinoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dinoService.remove(+id);
  }
}
