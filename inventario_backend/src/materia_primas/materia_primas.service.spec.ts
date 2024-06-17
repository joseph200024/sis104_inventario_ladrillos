import { Test, TestingModule } from '@nestjs/testing';
import { MateriaPrimasService } from './materia_primas.service';

describe('MateriaPrimasService', () => {
  let service: MateriaPrimasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MateriaPrimasService],
    }).compile();

    service = module.get<MateriaPrimasService>(MateriaPrimasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
