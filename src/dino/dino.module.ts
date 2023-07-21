import { Module } from '@nestjs/common';
import { DinoService } from './dino.service';
import { DinoController } from './dino.controller';

@Module({
  controllers: [DinoController],
  providers: [DinoService],
  exports:[DinoService]
})
export class DinoModule {
  constructor(private  dinosService: DinoService){}
}
