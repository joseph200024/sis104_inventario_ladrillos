import { Test, TestingModule } from '@nestjs/testing';
import { OrdenComprasController } from './orden_compras.controller';
import { OrdenComprasService } from './orden_compras.service';

describe('OrdenComprasController', () => {
  let controller: OrdenComprasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdenComprasController],
      providers: [OrdenComprasService],
    }).compile();

    controller = module.get<OrdenComprasController>(OrdenComprasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
