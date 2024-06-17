import { Injectable } from '@nestjs/common';
import { CreateDetalleProduccioneDto } from './dto/create-detalle_produccione.dto';
import { UpdateDetalleProduccioneDto } from './dto/update-detalle_produccione.dto';

@Injectable()
export class DetalleProduccionesService {
  create(createDetalleProduccioneDto: CreateDetalleProduccioneDto) {
    return 'This action adds a new detalleProduccione';
  }

  findAll() {
    return `This action returns all detalleProducciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detalleProduccione`;
  }

  update(id: number, updateDetalleProduccioneDto: UpdateDetalleProduccioneDto) {
    return `This action updates a #${id} detalleProduccione`;
  }

  remove(id: number) {
    return `This action removes a #${id} detalleProduccione`;
  }
}
