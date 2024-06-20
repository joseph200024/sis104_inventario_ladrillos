import { Test, TestingModule } from '@nestjs/testing';
import { MateriaprimasService } from './materiaprimas.service';

describe('MateriaprimasService', () => {
  let service: MateriaprimasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MateriaprimasService],
    }).compile();

    service = module.get<MateriaprimasService>(MateriaprimasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
