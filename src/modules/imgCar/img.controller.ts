/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ImgService } from './img.service';
import { CreateImgDto } from './dto/createImg.dto';
import { UpdateImgDto } from './dto/updateImg.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Images')
@Controller('imgs')
export class ImgController {
  constructor(private readonly imgService: ImgService) {}

  @Post()
  create(@Body() createImgDto: CreateImgDto) {
    return this.imgService.create(createImgDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.imgService.remove(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateimgDto: UpdateImgDto,
  ) {
    return this.imgService.update(id, updateimgDto);
  }
}
