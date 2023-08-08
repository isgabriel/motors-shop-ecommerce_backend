/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateImgDto {
  @IsString()
  url_img: string;

  @IsString()
  @IsNotEmpty()
  carProduct: string;
}
