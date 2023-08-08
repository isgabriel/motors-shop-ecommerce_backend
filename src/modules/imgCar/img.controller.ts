/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { ImgService } from './img.service';
import { CreateImgDto } from './dto/createImg.dto';

@Controller('car/imgs')
export class ImgController {
  constructor(private readonly imgService: ImgService) {}

  @Post()
  create(@Body() createImgDto: CreateImgDto) {
    return this.imgService.create(createImgDto);
  }
}
