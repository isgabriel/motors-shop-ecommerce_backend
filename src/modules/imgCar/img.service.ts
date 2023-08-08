/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { CreateImgDto } from './dto/createImg.dto';
import { ImgRepository } from './repositories/img.repository';

@Injectable()
export class ImgService {
  constructor(private imgRepository: ImgRepository) {}

  async create(createImgDto: CreateImgDto) {
    return await this.imgRepository.create(createImgDto);
  }
}
