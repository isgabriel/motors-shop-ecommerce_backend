/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ImgRepository } from '../img.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateImgDto } from '../../dto/createImg.dto';
import { Img } from '../../entities/img.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ImgPrismaRepository implements ImgRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateImgDto): Promise<Img> {
    const imgs = new Img();
    Object.assign(imgs, {
      ...data,
    });

    const newImgs = await this.prisma.img.create({
      data: { ...imgs },
    });

    return plainToInstance(Img, newImgs);
  }
}
