import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Bot } from '../entities/bot.entity';

@Injectable()
export class BotRepository extends Repository<Bot> { }
