import { Module } from '@nestjs/common';
import { EmpleadoElaboradoresService } from './empleado_elaboradores.service';
import { EmpleadoElaboradoresController } from './empleado_elaboradores.controller';

@Module({
  controllers: [EmpleadoElaboradoresController],
  providers: [EmpleadoElaboradoresService],
})
export class EmpleadoElaboradoresModule {}
