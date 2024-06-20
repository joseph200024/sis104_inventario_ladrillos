import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LadrillosService } from './ladrillos.service';
import { CreateLadrilloDto } from './dto/create-ladrillo.dto';
import { UpdateLadrilloDto } from './dto/update-ladrillo.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ladrillos')
@Controller('ladrillos')
export class LadrillosController {
  constructor(private readonly ladrillosService: LadrillosService) {}

  @Post()
  create(@Body() createLadrilloDto: CreateLadrilloDto) {
    return this.ladrillosService.create(createLadrilloDto);
  }

  @Get()
  findAll() {
    return this.ladrillosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ladrillosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLadrilloDto: UpdateLadrilloDto) {
    return this.ladrillosService.update(+id, updateLadrilloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ladrillosService.remove(+id);
  }
}
