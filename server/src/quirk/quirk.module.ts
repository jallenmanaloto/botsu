import { Module } from '@nestjs/common';
import { QuirkService } from './quirk.service';
import { QuirkController } from './quirk.controller';

@Module({
  controllers: [QuirkController],
  providers: [QuirkService]
})
export class QuirkModule {}
