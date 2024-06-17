import { Module } from '@nestjs/common';
import { DetalleOrdenComprasService } from './detalle_orden_compras.service';
import { DetalleOrdenComprasController } from './detalle_orden_compras.controller';

@Module({
  controllers: [DetalleOrdenComprasController],
  providers: [DetalleOrdenComprasService],
})
export class DetalleOrdenComprasModule {}
