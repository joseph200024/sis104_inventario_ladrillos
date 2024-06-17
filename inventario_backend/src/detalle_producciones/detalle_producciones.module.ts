import { Module } from '@nestjs/common';
import { DetalleProduccionesService } from './detalle_producciones.service';
import { DetalleProduccionesController } from './detalle_producciones.controller';

@Module({
  controllers: [DetalleProduccionesController],
  providers: [DetalleProduccionesService],
})
export class DetalleProduccionesModule {}
