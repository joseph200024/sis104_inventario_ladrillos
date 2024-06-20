import { Test, TestingModule } from '@nestjs/testing';
import { MateriaprimasController } from './materiaprimas.controller';
import { MateriaprimasService } from './materiaprimas.service';

describe('MateriaprimasController', () => {
  let controller: MateriaprimasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MateriaprimasController],
      providers: [MateriaprimasService],
    }).compile();

    controller = module.get<MateriaprimasController>(MateriaprimasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
