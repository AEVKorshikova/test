import { Injectable } from '@nestjs/common';
import { CreateDinoDto } from './dto/create-dino.dto';
import { UpdateDinoDto } from './dto/update-dino.dto';
import { Dino } from './entities/dino.entity';

@Injectable()
export class DinoService {

  private readonly dinos: Dino[]=[];
  create(dino: Dino) {
    this.dinos.push(dino);
    return 'This action adds a new dino';
  }

  findAll(): Dino {
    return this.dinos;
   // return `This action returns all dino`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dino`;
  }

  update(id: number, updateDinoDto: UpdateDinoDto) {
    return `This action updates a #${id} dino`;
  }

  remove(id: number) {
    return `This action removes a #${id} dino`;
  }
}
