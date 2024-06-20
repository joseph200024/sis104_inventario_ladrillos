import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMateriaprimaDto } from './dto/create-materiaprima.dto';
import { UpdateMateriaprimaDto } from './dto/update-materiaprima.dto';
import { Materiaprima } from './entities/materiaprima.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MateriaprimasService {
  constructor(
    @InjectRepository(Materiaprima) private materiaprimasRepository: Repository<Materiaprima>,
  ) {}

  async create(createMateriaprimaDto: CreateMateriaprimaDto): Promise<Materiaprima> {
    const existe = await this.materiaprimasRepository.findOneBy({
      nombre: createMateriaprimaDto.nombre.trim(),
    });

    if (existe) {
      throw new ConflictException('El materiaprima ya existe');
    }

    return this.materiaprimasRepository.save({
      nombre: createMateriaprimaDto.nombre.trim(),
      descripcion: createMateriaprimaDto.descripcion.trim(),
      unidadMedida: createMateriaprimaDto.unidadMedida.trim(),
      precioUnitario: createMateriaprimaDto.precioUnitario.trim(),
    });
  }

  async findAll(): Promise<Materiaprima[]> {
    return this.materiaprimasRepository.find();
  }

  async findOne(id: number): Promise<Materiaprima> {
    const materiaprima = await this.materiaprimasRepository.findOneBy({ id });
    if (!materiaprima) {
      throw new NotFoundException(`La materiaprima ${id} no existe`);
    }
    return materiaprima;
  }

  async update(id: number, updateMateriaprimaDto: UpdateMateriaprimaDto): Promise<Materiaprima> {
    const materiaprima = await this.findOne(id);
    const materiaprimaUpdate = Object.assign(materiaprima, updateMateriaprimaDto);
    return this.materiaprimasRepository.save(materiaprimaUpdate);
  }

  async remove(id: number) {
    const materiaprima = await this.findOne(id);
    return this.materiaprimasRepository.delete(materiaprima.id);
  }
}
