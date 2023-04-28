import { Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { BotController } from './bot.controller';
import { BotRepository } from './bot.repository';

@Module({
  controllers: [BotController],
  providers: [BotService, BotRepository]
})
export class BotModule {}
