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
  findAll(@Param('userId') userId: string) {
    return this.botService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.botService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBotDto: UpdateBotDto,
    @Res() res: Response
  ) {
    const updatedBot = await this.botService.update(id, updateBotDto);

    if (updatedBot) return res.status(HttpStatus.OK).json({
      message: 'Successfully updated bot'
    })

    return res.status(HttpStatus.BAD_REQUEST).json({
      message: 'Unable to update bot'
    })
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    const botToDelete = await this.botService.findOne(id);
    this.botService.remove(id);

    if (botToDelete) return res.status(HttpStatus.OK).json({
      message: 'Bot deleted successfully',
      bot: botToDelete
    })
  }
}
