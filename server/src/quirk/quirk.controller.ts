import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { QuirkService } from './quirk.service';
import { CreateQuirkDto } from './dto/create-quirk.dto';
import { UpdateQuirkDto } from './dto/update-quirk.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('quirk')
@UseGuards(AuthGuard('jwt'))
export class QuirkController {
  constructor(private readonly quirkService: QuirkService) { }

  @Post()
  create(@Body() createQuirkDto: CreateQuirkDto) {
    return this.quirkService.create(createQuirkDto);
  }

  @Get()
  findAll() {
    return this.quirkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quirkService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuirkDto: UpdateQuirkDto) {
    return this.quirkService.update(+id, updateQuirkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quirkService.remove(+id);
  }
}
