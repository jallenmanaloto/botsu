import { Injectable } from '@nestjs/common';
import { CreateBotDto } from './dto/create-bot.dto';
import { UpdateBotDto } from './dto/update-bot.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BotRepository } from './bot.repository';

@Injectable()
export class BotService {
  constructor(
    @InjectRepository(BotRepository)
    private botRepository: BotRepository
  ) {}

  create(createBotDto: CreateBotDto) {
    const newBot = this.botRepository.createNew(createBotDto);
  }

  findAll() { 
    return `This action returns all bot`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bot`;
  }

  update(id: number, updateBotDto: UpdateBotDto) {
    return `This action updates a #${id} bot`;
  }

  remove(id: number) {
    return `This action removes a #${id} bot`;
  }
}
