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

  findOne(id: string) {
    return this.botRepository.findBy({ id });
  }

  async update(id: string, updateBotDto: UpdateBotDto) {
    const updatedBot = await this.botRepository.update(id, updateBotDto);

    return updatedBot.affected > 0;
  }

  remove(id: number) {
    return `This action removes a #${id} bot`;
  }
}
