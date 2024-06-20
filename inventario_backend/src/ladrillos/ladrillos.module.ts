import { Module } from '@nestjs/common';
import { LadrillosService } from './ladrillos.service';
import { LadrillosController } from './ladrillos.controller';
import { Ladrillo } from './entities/ladrillo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ladrillo])],
  controllers: [LadrillosController],
  providers: [LadrillosService],
})
export class LadrillosModule {}
