/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CarProductRepository } from '../carProducts.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CarProduct } from '../../entities/car-product.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class CarProductPrismaRepository implements CarProductRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    const cars = new CarProduct();
    Object.assign(cars, {
      ...data,
    });

    const newCars = await this.prisma.carProducts.create({
      data: { ...cars },
    });

    return plainToInstance(CarProduct, newCars);
  }
}
