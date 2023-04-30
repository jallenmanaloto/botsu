import { Module } from '@nestjs/common';
import { QuirkService } from './quirk.service';
import { QuirkController } from './quirk.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quirk } from '../entities/quirk.entity';
import { QuirkRepository } from './quirk.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Quirk])],
  controllers: [QuirkController],
  providers: [QuirkService]
})
export class QuirkModule { }
