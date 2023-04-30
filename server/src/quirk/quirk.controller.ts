import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { QuirkService } from './quirk.service';
import { CreateQuirkDto } from './dto/create-quirk.dto';

@Controller('quirk')
export class QuirkController {
  constructor(private readonly quirkService: QuirkService) { }

  @Post()
  create(@Body() quirks: CreateQuirkDto[]) {
    return this.quirkService.create(quirks);
  }

  @Get()
  findAll() {
    return this.quirkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quirkService.findOne(+id);
  }
}
