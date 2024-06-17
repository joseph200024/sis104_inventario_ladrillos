import { Test, TestingModule } from '@nestjs/testing';
import { LadrillosController } from './ladrillos.controller';
import { LadrillosService } from './ladrillos.service';

describe('LadrillosController', () => {
  let controller: LadrillosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LadrillosController],
      providers: [LadrillosService],
    }).compile();

    controller = module.get<LadrillosController>(LadrillosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
