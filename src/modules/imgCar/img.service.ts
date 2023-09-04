/* eslint-disable prettier/prettier */

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateImgDto } from './dto/createImg.dto';
import { ImgRepository } from './repositories/img.repository';
import { UpdateImgDto } from './dto/updateImg.dto';

@Injectable()
export class ImgService {
  constructor(private imgRepository: ImgRepository) {}

  async create(createImgDto: CreateImgDto) {
    return await this.imgRepository.create(createImgDto);
  }

  async remove(id: string) {
    const findId = await this.imgRepository.findOne(id);

    if (!findId) {
      throw new NotFoundException('Img not found!');
    }

    return await this.imgRepository.delete(id);
  }

  async update(id: string, updateImgDto: UpdateImgDto) {
    const findId = await this.imgRepository.findOne(id);

    if (!findId) {
      throw new NotFoundException('Img not found!');
    }

    return await this.imgRepository.update(id, updateImgDto);
  }
}
