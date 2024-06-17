import { Test, TestingModule } from '@nestjs/testing';
import { DetalleProduccionesService } from './detalle_producciones.service';

describe('DetalleProduccionesService', () => {
  let service: DetalleProduccionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetalleProduccionesService],
    }).compile();

    service = module.get<DetalleProduccionesService>(DetalleProduccionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
