import { Test, TestingModule } from '@nestjs/testing';
import { RemitaController } from './remita.controller';

describe('RemitaController', () => {
  let controller: RemitaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RemitaController],
    }).compile();

    controller = module.get<RemitaController>(RemitaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
