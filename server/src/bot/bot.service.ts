import { Injectable } from '@nestjs/common';
import { CreateBotDto } from './dto/create-bot.dto';
import { UpdateBotDto } from './dto/update-bot.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Bot } from '../entities/bot.entity';
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

  async paginate(limit?: number, offset?: number): Promise<[Bot[], number]> {
    const query = this.botRepository.createQueryBuilder('quirk');
    if (limit) query.take(limit);
    if (offset) query.skip(offset);

    const [bots, total] = await query.getManyAndCount();

    return [bots, total];
  }

  async findAll(userId: string, limit?: number, page?: number) {

    const limitPerPage = limit || 5;
    const currentPage = page || 1;
    const offset = (currentPage - 1) * limitPerPage;
    const [quirks, total] = await this.paginate(limitPerPage, offset);

    return {
      data: quirks,
      currentPage,
      total,
      lastPage: Math.ceil(total / limitPerPage)
    }
  }

  findOne(id: string) {
    return this.botRepository.findBy({ id });
  }

  async update(id: string, updateBotDto: UpdateBotDto) {
    const updatedBot = await this.botRepository.update(id, updateBotDto);

    return updatedBot.affected > 0;
  }

  remove(id: string) {
    this.botRepository.delete(id);
  }
}
