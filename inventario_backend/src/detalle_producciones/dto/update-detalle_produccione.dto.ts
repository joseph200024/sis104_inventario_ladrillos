import { PartialType } from '@nestjs/swagger';
import { CreateDetalleProduccioneDto } from './create-detalle_produccione.dto';

export class UpdateDetalleProduccioneDto extends PartialType(CreateDetalleProduccioneDto) {}
