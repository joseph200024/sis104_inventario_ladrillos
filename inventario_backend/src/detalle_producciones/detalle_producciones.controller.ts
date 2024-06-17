import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetalleProduccionesService } from './detalle_producciones.service';
import { CreateDetalleProduccioneDto } from './dto/create-detalle_produccione.dto';
import { UpdateDetalleProduccioneDto } from './dto/update-detalle_produccione.dto';

@Controller('detalle-producciones')
export class DetalleProduccionesController {
  constructor(private readonly detalleProduccionesService: DetalleProduccionesService) {}

  @Post()
  create(@Body() createDetalleProduccioneDto: CreateDetalleProduccioneDto) {
    return this.detalleProduccionesService.create(createDetalleProduccioneDto);
  }

  @Get()
  findAll() {
    return this.detalleProduccionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalleProduccionesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDetalleProduccioneDto: UpdateDetalleProduccioneDto,
  ) {
    return this.detalleProduccionesService.update(+id, updateDetalleProduccioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detalleProduccionesService.remove(+id);
  }
}
