/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({
    default: 'Preço acessível',
    description: 'Preço acessível',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  comment: string;
}
