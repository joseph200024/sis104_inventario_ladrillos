import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MateriaPrimasService } from './materia_primas.service';
import { CreateMateriaPrimaDto } from './dto/create-materia_prima.dto';
import { UpdateMateriaPrimaDto } from './dto/update-materia_prima.dto';

@Controller('materia-primas')
export class MateriaPrimasController {
  constructor(private readonly materiaPrimasService: MateriaPrimasService) {}

  @Post()
  create(@Body() createMateriaPrimaDto: CreateMateriaPrimaDto) {
    return this.materiaPrimasService.create(createMateriaPrimaDto);
  }

  @Get()
  findAll() {
    return this.materiaPrimasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.materiaPrimasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMateriaPrimaDto: UpdateMateriaPrimaDto) {
    return this.materiaPrimasService.update(+id, updateMateriaPrimaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.materiaPrimasService.remove(+id);
  }
}
