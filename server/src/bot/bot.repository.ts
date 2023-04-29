import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Bot } from 'src/entities/bot.entity';

@Injectable()
export class BotRepository extends Repository<Bot> { }
