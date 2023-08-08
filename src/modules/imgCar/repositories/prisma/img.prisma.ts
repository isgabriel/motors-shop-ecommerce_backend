/* eslint-disable prettier/prettier */
import { Img } from './../../entities/img.entity';
import { Injectable } from '@nestjs/common';
import { ImgRepository } from '../img.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateImgDto } from '../../dto/createImg.dto';

@Injectable()
export class ImgPrismaRepository implements ImgRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateImgDto): Promise<Img> {
    const imgs = new Img();
    Object.assign(imgs, {
      ...data,
    });

    const findCar = await this.prisma.carProducts.findUnique({
      where: {
        id: data.carProduct,
      },
    });

    console.log(data, findCar);

    const newImgs = await this.prisma.img.create({
      data: {
        url_img: data.url_img,
        carProduct: {
          connect: {
            id: data.carProduct,
          },
        },
      },
    });

    return newImgs;
  }
}
