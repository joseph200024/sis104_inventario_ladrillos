import { Test, TestingModule } from '@nestjs/testing';
import { LadrillosService } from './ladrillos.service';

describe('LadrillosService', () => {
  let service: LadrillosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LadrillosService],
    }).compile();

    service = module.get<LadrillosService>(LadrillosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
