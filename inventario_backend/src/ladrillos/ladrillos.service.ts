import { Injectable } from '@nestjs/common';
import { CreateLadrilloDto } from './dto/create-ladrillo.dto';
import { UpdateLadrilloDto } from './dto/update-ladrillo.dto';

@Injectable()
export class LadrillosService {
  create(createLadrilloDto: CreateLadrilloDto) {
    return 'This action adds a new ladrillo';
  }

  findAll() {
    return `This action returns all ladrillos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ladrillo`;
  }

  update(id: number, updateLadrilloDto: UpdateLadrilloDto) {
    return `This action updates a #${id} ladrillo`;
  }

  remove(id: number) {
    return `This action removes a #${id} ladrillo`;
  }
}
