import { Test, TestingModule } from '@nestjs/testing';
import { EmpleadoElaboradoresService } from './empleado_elaboradores.service';

describe('EmpleadoElaboradoresService', () => {
  let service: EmpleadoElaboradoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpleadoElaboradoresService],
    }).compile();

    service = module.get<EmpleadoElaboradoresService>(EmpleadoElaboradoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
