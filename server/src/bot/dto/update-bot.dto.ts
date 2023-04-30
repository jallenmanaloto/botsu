import { PartialType } from '@nestjs/mapped-types';
import { CreateBotDto } from './create-bot.dto';
import { IsString } from 'class-validator';

export class UpdateBotDto extends PartialType(CreateBotDto) {
  @IsString()
  name: string;

  @IsString()
  styleName: string;

  @IsString()
  description: string;
}
