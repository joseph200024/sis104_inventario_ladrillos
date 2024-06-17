import { Module } from '@nestjs/common';
import { LadrillosService } from './ladrillos.service';
import { LadrillosController } from './ladrillos.controller';

@Module({
  controllers: [LadrillosController],
  providers: [LadrillosService],
})
export class LadrillosModule {}
