import { Test, TestingModule } from '@nestjs/testing';
import { QuirkService } from './quirk.service';

describe('QuirkService', () => {
  let service: QuirkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuirkService],
    }).compile();

    service = module.get<QuirkService>(QuirkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
