/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CarProductRepository } from '../carProducts.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CarProduct } from '../../entities/car-product.entity';
import { plainToInstance } from 'class-transformer';
import { CreateCarProductsDto } from '../../dto/create-car-product.dto';
import { UpdateCarProductDto } from '../../dto/update-car-product.dto';

@Injectable()
export class CarProductPrismaRepository implements CarProductRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCarProductsDto): Promise<CarProduct> {
    const cars = new CarProduct();
    Object.assign(cars, {
      ...data,
    });

    const newCars = await this.prisma.carProducts.create({
      data: { ...cars },
    });

    return plainToInstance(CarProduct, newCars);
  }

  async findAll(): Promise<CarProduct[]> {
    const cars = await this.prisma.carProducts.findMany();
    return cars;
  }

  async findOne(id: string): Promise<CarProduct> {
    const car = await this.prisma.carProducts.findUnique({
      where: { id },
    });

    return car;
  }

  async update(id: string, data: UpdateCarProductDto): Promise<CarProduct> {
    const car = await this.prisma.carProducts.update({
      where: { id },
      data: { ...data },
    });

    return car;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.carProducts.delete({
      where: { id },
    });
  }
}
