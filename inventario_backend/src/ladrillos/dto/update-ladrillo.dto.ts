import { PartialType } from '@nestjs/swagger';
import { CreateLadrilloDto } from './create-ladrillo.dto';

export class UpdateLadrilloDto extends PartialType(CreateLadrilloDto) {}
