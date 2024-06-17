import { Test, TestingModule } from '@nestjs/testing';
import { DetalleProduccionesController } from './detalle_producciones.controller';
import { DetalleProduccionesService } from './detalle_producciones.service';

describe('DetalleProduccionesController', () => {
  let controller: DetalleProduccionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetalleProduccionesController],
      providers: [DetalleProduccionesService],
    }).compile();

    controller = module.get<DetalleProduccionesController>(DetalleProduccionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
