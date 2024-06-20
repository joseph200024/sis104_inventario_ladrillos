import { Module } from '@nestjs/common';
import { MateriaprimasService } from './materiaprimas.service';
import { MateriaprimasController } from './materiaprimas.controller';
import { Materiaprima } from './entities/materiaprima.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Materiaprima])],
  controllers: [MateriaprimasController],
  providers: [MateriaprimasService],
})
export class MateriaprimasModule {}
