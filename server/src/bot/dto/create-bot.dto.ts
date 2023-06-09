import { IsString, IsNotEmpty } from 'class-validator';

export class CreateBotDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  styleName: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  quirkId: string;

  @IsString()
  quirkName: string;

  @IsString()
  quirkFlag: string;

}
