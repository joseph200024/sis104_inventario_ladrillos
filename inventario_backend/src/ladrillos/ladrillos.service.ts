import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateLadrilloDto } from './dto/create-ladrillo.dto';
import { UpdateLadrilloDto } from './dto/update-ladrillo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ladrillo } from './entities/ladrillo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LadrillosService {
  constructor(@InjectRepository(Ladrillo) private ladrillosRepository: Repository<Ladrillo>) {}

  async create(createLadrilloDto: CreateLadrilloDto): Promise<Ladrillo> {
    const existe = await this.ladrillosRepository.findOneBy({
      tipo: createLadrilloDto.tipo.trim(),
    });

    if (existe) {
      throw new ConflictException('El ladrillo ya existe');
    }

    return this.ladrillosRepository.save({
      tipo: createLadrilloDto.tipo.trim(),
      dimension: createLadrilloDto.dimension.trim(),
      peso: createLadrilloDto.peso.trim(),
      precioUnitario: createLadrilloDto.precioUnitario.trim(),
      descripcion: createLadrilloDto.descripcion.trim(),
      stock: createLadrilloDto.stock,
    });
  }

  async findAll(): Promise<Ladrillo[]> {
    return this.ladrillosRepository.find();
  }

  async findOne(id: number): Promise<Ladrillo> {
    const ladrillo = await this.ladrillosRepository.findOneBy({ id });
    if (!ladrillo) {
      throw new NotFoundException(`La ladrillo ${id} no existe`);
    }
    return ladrillo;
  }

  async update(id: number, updateLadrilloDto: UpdateLadrilloDto): Promise<Ladrillo> {
    const ladrillo = await this.findOne(id);
    const ladrilloUpdate = Object.assign(ladrillo, updateLadrilloDto);
    return this.ladrillosRepository.save(ladrilloUpdate);
  }

  async remove(id: number) {
    const ladrillo = await this.findOne(id);
    return this.ladrillosRepository.delete(ladrillo.id);
  }
}
