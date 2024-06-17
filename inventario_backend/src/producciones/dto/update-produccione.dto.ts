import { PartialType } from '@nestjs/swagger';
import { CreateProduccioneDto } from './create-produccione.dto';

export class UpdateProduccioneDto extends PartialType(CreateProduccioneDto) {}
