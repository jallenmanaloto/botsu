import { Injectable } from '@nestjs/common';
import { CreateBotDto } from './dto/create-bot.dto';
import { UpdateBotDto } from './dto/update-bot.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Bot } from 'src/entities/bot.entity';
import { BotRepository } from './bot.repository';

@Injectable()
export class BotService {
  constructor(
    @InjectRepository(Bot)
    private botRepository: BotRepository
  ) { }

  create(createBotDto: CreateBotDto) {
    const newBot = this.botRepository.create(createBotDto);
    const savedBot = this.botRepository.save(newBot);

    return savedBot;
  }

  findAll(userId: string) {
    return this.botRepository.find({
      where: {
        user: {
          id: userId
        }
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} bot`;
  }

  async update(id: number, updateBotDto: UpdateBotDto) {
    return await this.botRepository.update(id, updateBotDto);
  }

  remove(id: number) {
    return `This action removes a #${id} bot`;
  }
}
