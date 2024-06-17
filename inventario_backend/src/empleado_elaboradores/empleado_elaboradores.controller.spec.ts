import { Test, TestingModule } from '@nestjs/testing';
import { EmpleadoElaboradoresController } from './empleado_elaboradores.controller';
import { EmpleadoElaboradoresService } from './empleado_elaboradores.service';

describe('EmpleadoElaboradoresController', () => {
  let controller: EmpleadoElaboradoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmpleadoElaboradoresController],
      providers: [EmpleadoElaboradoresService],
    }).compile();

    controller = module.get<EmpleadoElaboradoresController>(EmpleadoElaboradoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
