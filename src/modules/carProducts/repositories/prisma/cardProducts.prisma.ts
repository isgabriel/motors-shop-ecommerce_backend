/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CarProductRepository } from '../carProducts.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CarProduct } from '../../entities/car-product.entity';
import { CreateCarProductsDto } from '../../dto/create-car-product.dto';
import { UpdateCarProductDto } from '../../dto/update-car-product.dto';
import {
  PaginateFunction,
  PaginatedResult,
} from '../../pagination/car-pagination.interface';
import { paginator } from '../../pagination/car-pagination';
import { Prisma } from '@prisma/client';

const paginate: PaginateFunction = paginator({ perPage: 12 });

@Injectable()
export class CarProductPrismaRepository implements CarProductRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCarProductsDto, userId: string): Promise<CarProduct> {
    const cars = new CarProduct();
    Object.assign(cars, {
      ...data,
      userId
    });

    const newCars = await this.prisma.carProducts.create({
      data: { ...cars,
      userId: cars.userId },
    });

    return newCars;
  }

  async findAllPagination({
    where,
    orderBy,
    page,
  }: {
    where?: Prisma.CarProductsWhereInput;
    orderBy?: Prisma.CarProductsOrderByWithRelationInput;
    page?: number;
  }): Promise<PaginatedResult<CarProduct[]>> {
    return paginate(
      this.prisma.carProducts,
      {
        where,
        orderBy,
      },
      {
        page,
      },
    );
  }

  async findAll(): Promise<CarProduct[]> {
    const cars = await this.prisma.carProducts.findMany({
      include: {
        img: {
          select: {
            id: true,
            url_img: true,
          },
        },
        user: {
          select: {
            name: true
          }
        }
      },
    });

    return cars;
  }

  async findLogged(id:string): Promise<CarProduct[]> {
    const cars = await this.prisma.carProducts.findMany({
      where: {userId:id},
      include: {
        img: {
          select: {
            id: true,
            url_img: true,
          },
        },
        user: {
          select: {
            name: true
          }
        }
      },
    });

    return cars;
  }

  async findOne(id: string): Promise<CarProduct> {
    const car = await this.prisma.carProducts.findUnique({
      where: { id },
      include: {
        img: {
          select: {
            id: true,
            url_img: true,
          },
        },
      },
    });

    return car;
  }

  async update(id: string, data: UpdateCarProductDto, userId: string): Promise<CarProduct> {
    const car = await this.prisma.carProducts.update({
      where: { id:id, userId:userId },
      data: { ...data },
    });

    return car;
  }

  async delete(id: string, userId: string): Promise<void> {
    await this.prisma.carProducts.delete({
      where: { id:id, userId:userId },
    });
  }
}
