/* eslint-disable prettier/prettier */
import { Img } from './../../entities/img.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ImgRepository } from '../img.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateImgDto } from '../../dto/createImg.dto';
import { UpdateImgDto } from '../../dto/updateImg.dto';

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

    if (!findCar) {
      throw new NotFoundException('Car not found!');
    }

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

  async findOne(id: string): Promise<Img> {
    const img = await this.prisma.img.findUnique({
      where: { id },
    });
    return img;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.img.delete({
      where: { id },
    });
  }

  async update(id: string, data: UpdateImgDto): Promise<Img> {
    const img = await this.prisma.img.update({
      where: { id },
      data: { ...data },
    });

    return img;
  }
}
