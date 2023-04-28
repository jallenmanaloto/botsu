import { Injectable } from '@nestjs/common';
import { CreateQuirkDto } from './dto/create-quirk.dto';
import { UpdateQuirkDto } from './dto/update-quirk.dto';

@Injectable()
export class QuirkService {
  create(createQuirkDto: CreateQuirkDto) {
    return 'This action adds a new quirk';
  }

  findAll() {
    return `This action returns all quirk`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quirk`;
  }

  update(id: number, updateQuirkDto: UpdateQuirkDto) {
    return `This action updates a #${id} quirk`;
  }

  remove(id: number) {
    return `This action removes a #${id} quirk`;
  }
}
