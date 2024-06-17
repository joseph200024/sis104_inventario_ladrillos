import { Injectable } from '@nestjs/common';
import { CreateEmpleadoElaboradoreDto } from './dto/create-empleado_elaboradore.dto';
import { UpdateEmpleadoElaboradoreDto } from './dto/update-empleado_elaboradore.dto';

@Injectable()
export class EmpleadoElaboradoresService {
  create(createEmpleadoElaboradoreDto: CreateEmpleadoElaboradoreDto) {
    return 'This action adds a new empleadoElaboradore';
  }

  findAll() {
    return `This action returns all empleadoElaboradores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} empleadoElaboradore`;
  }

  update(id: number, updateEmpleadoElaboradoreDto: UpdateEmpleadoElaboradoreDto) {
    return `This action updates a #${id} empleadoElaboradore`;
  }

  remove(id: number) {
    return `This action removes a #${id} empleadoElaboradore`;
  }
}
