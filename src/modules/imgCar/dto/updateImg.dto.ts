/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class UpdateImgDto {
  @IsString()
  url_img: string;
}
