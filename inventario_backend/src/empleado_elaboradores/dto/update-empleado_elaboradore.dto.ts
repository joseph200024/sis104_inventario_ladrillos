import { PartialType } from '@nestjs/swagger';
import { CreateEmpleadoElaboradoreDto } from './create-empleado_elaboradore.dto';

export class UpdateEmpleadoElaboradoreDto extends PartialType(CreateEmpleadoElaboradoreDto) {}
