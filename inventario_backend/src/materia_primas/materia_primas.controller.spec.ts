import { Test, TestingModule } from '@nestjs/testing';
import { MateriaPrimasController } from './materia_primas.controller';
import { MateriaPrimasService } from './materia_primas.service';

describe('MateriaPrimasController', () => {
  let controller: MateriaPrimasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MateriaPrimasController],
      providers: [MateriaPrimasService],
    }).compile();

    controller = module.get<MateriaPrimasController>(MateriaPrimasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
