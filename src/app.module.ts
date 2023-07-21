import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { User } from './users/entities/user.entity';
import { DinoController } from './dino/dino.controller';
import { DinoService } from './dino/dino.service';
import { DinoModule } from './dino/dino.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DatabaseModule.forRoot([User]), UserModule],
  controllers: [DinoController],
  providers: [DinoService],
})
export class AppModule {}
