import { PartialType } from '@nestjs/swagger';
import { CreateOrdenCompraDto } from './create-orden_compra.dto';

export class UpdateOrdenCompraDto extends PartialType(CreateOrdenCompraDto) {}
