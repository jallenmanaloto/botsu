import { PartialType } from '@nestjs/mapped-types';
import { CreateBotDto } from './create-bot.dto';

export class UpdateBotDto extends PartialType(CreateBotDto) {
  name: string;
  styleName: string;
  description: string;
}
