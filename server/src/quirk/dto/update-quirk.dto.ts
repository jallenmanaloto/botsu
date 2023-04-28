import { PartialType } from '@nestjs/mapped-types';
import { CreateQuirkDto } from './create-quirk.dto';

export class UpdateQuirkDto extends PartialType(CreateQuirkDto) {}
