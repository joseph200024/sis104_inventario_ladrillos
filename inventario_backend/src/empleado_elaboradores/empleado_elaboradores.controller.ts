import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpleadoElaboradoresService } from './empleado_elaboradores.service';
import { CreateEmpleadoElaboradoreDto } from './dto/create-empleado_elaboradore.dto';
import { UpdateEmpleadoElaboradoreDto } from './dto/update-empleado_elaboradore.dto';

@Controller('empleado-elaboradores')
export class EmpleadoElaboradoresController {
  constructor(private readonly empleadoElaboradoresService: EmpleadoElaboradoresService) {}

  @Post()
  create(@Body() createEmpleadoElaboradoreDto: CreateEmpleadoElaboradoreDto) {
    return this.empleadoElaboradoresService.create(createEmpleadoElaboradoreDto);
  }

  @Get()
  findAll() {
    return this.empleadoElaboradoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empleadoElaboradoresService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmpleadoElaboradoreDto: UpdateEmpleadoElaboradoreDto,
  ) {
    return this.empleadoElaboradoresService.update(+id, updateEmpleadoElaboradoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empleadoElaboradoresService.remove(+id);
  }
}
