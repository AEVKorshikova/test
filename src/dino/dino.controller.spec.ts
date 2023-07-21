import { Test, TestingModule } from '@nestjs/testing';
import { DinoController } from './dino.controller';
import { DinoService } from './dino.service';

describe('DinoController', () => {
  let controller: DinoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DinoController],
      providers: [DinoService],
    }).compile();

    controller = module.get<DinoController>(DinoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
