import { Injectable } from '@nestjs/common';
import { CreateQuirkDto } from './dto/create-quirk.dto';
import { QuirkRepository } from './quirk.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Quirk } from '../entities/quirk.entity';

@Injectable()
export class QuirkService {
  constructor(@InjectRepository(Quirk) private quirkRepository: QuirkRepository) { }

  async create(quirks: CreateQuirkDto[]) {
    return this.quirkRepository.save(quirks);
  }

  async findAll() {
    return this.quirkRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} quirk`;
  }
}
