import { PartialType } from '@nestjs/swagger';
import { CreateDetalleOrdenCompraDto } from './create-detalle_orden_compra.dto';

export class UpdateDetalleOrdenCompraDto extends PartialType(CreateDetalleOrdenCompraDto) {}
