import { Injectable } from '@nestjs/common';
import { CreateMateriaPrimaDto } from './dto/create-materia_prima.dto';
import { UpdateMateriaPrimaDto } from './dto/update-materia_prima.dto';

@Injectable()
export class MateriaPrimasService {
  create(createMateriaPrimaDto: CreateMateriaPrimaDto) {
    return 'This action adds a new materiaPrima';
  }

  findAll() {
    return `This action returns all materiaPrimas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} materiaPrima`;
  }

  update(id: number, updateMateriaPrimaDto: UpdateMateriaPrimaDto) {
    return `This action updates a #${id} materiaPrima`;
  }

  remove(id: number) {
    return `This action removes a #${id} materiaPrima`;
  }
}
