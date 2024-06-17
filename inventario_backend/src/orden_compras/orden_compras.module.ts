import { Module } from '@nestjs/common';
import { OrdenComprasService } from './orden_compras.service';
import { OrdenComprasController } from './orden_compras.controller';

@Module({
  controllers: [OrdenComprasController],
  providers: [OrdenComprasService],
})
export class OrdenComprasModule {}
