import { Controller, Get, Post, Body, Query } from '@nestjs/common';
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

  @Get('shorteen')
  getShorteen(@Query('url') url: string) {
    return this.quirkService.shorteen(url);
  }

  @Get('nationale')
  getNationale(@Query('name') name: string) {
    return this.quirkService.nationale(name);
  }

  @Get('un-shorteen')
  getUnshorteen(@Query('url') url: string) {
    return this.quirkService.unshorteen(url);
  }

  @Get('rundome')
  getRundome() {
    return this.quirkService.rundome();
  }

  @Get('chuck')
  getChuckNorris() {
    return this.quirkService.chuck();
  }

  @Get('insultor')
  getInsultor() {
    return this.quirkService.insultor();
  }

  @Get('daddeh')
  getDaddeh() {
    return this.quirkService.daddeh();
  }

  @Get('quote')
  getQuote() {
    return this.quirkService.quote();
  }

  @Get('wuwuid')
  getWuwuid() {
    return this.quirkService.wuwuid();
  }

  @Get('catify')
  getCatify() {
    return this.quirkService.catify();
  }

  @Get('agify')
  getAgify(@Query('name') name: string) {
    return this.quirkService.agify(name);
  }

  @Get('ipfy')
  getIpfy() {
    return this.quirkService.ipfy();
  }

}
