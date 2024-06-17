import { Module } from '@nestjs/common';
import { MateriaPrimasService } from './materia_primas.service';
import { MateriaPrimasController } from './materia_primas.controller';

@Module({
  controllers: [MateriaPrimasController],
  providers: [MateriaPrimasService],
})
export class MateriaPrimasModule {}
