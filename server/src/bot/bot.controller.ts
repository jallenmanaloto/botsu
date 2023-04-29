import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Res } from '@nestjs/common';
import { BotService } from './bot.service';
import { CreateBotDto } from './dto/create-bot.dto';
import { UpdateBotDto } from './dto/update-bot.dto';
import { Response } from 'express';

@Controller('bot')
export class BotController {
  constructor(private readonly botService: BotService) { }

  @Post()
  async create(@Body() createBotDto: CreateBotDto, @Res() res: Response) {
    const newBot = await this.botService.create(createBotDto);
    if (newBot) return res.status(HttpStatus.CREATED)
      .json({
        message: 'Successfully created a new Bot',
        bot: newBot
      });

    return res.status(HttpStatus.BAD_REQUEST)
      .json({
        message: 'Unable to create a new bot',
      });
  }

  @Get()
  findAll() {
    return this.botService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.botService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBotDto: UpdateBotDto) {
    return this.botService.update(+id, updateBotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.botService.remove(+id);
  }
}
