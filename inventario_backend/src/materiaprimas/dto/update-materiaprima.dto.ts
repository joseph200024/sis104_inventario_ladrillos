import { PartialType } from '@nestjs/swagger';
import { CreateMateriaprimaDto } from './create-materiaprima.dto';

export class UpdateMateriaprimaDto extends PartialType(CreateMateriaprimaDto) {}
