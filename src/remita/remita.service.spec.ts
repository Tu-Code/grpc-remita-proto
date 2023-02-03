import { Test, TestingModule } from '@nestjs/testing';
import { RemitaService } from './remita.service';

describe('RemitaService', () => {
  let service: RemitaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemitaService],
    }).compile();

    service = module.get<RemitaService>(RemitaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
