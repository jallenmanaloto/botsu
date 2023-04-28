import { Test, TestingModule } from '@nestjs/testing';
import { QuirkController } from './quirk.controller';
import { QuirkService } from './quirk.service';

describe('QuirkController', () => {
  let controller: QuirkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuirkController],
      providers: [QuirkService],
    }).compile();

    controller = module.get<QuirkController>(QuirkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
