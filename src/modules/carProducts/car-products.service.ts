/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateCarProductsDto } from './dto/create-car-product.dto';
import { UpdateCarProductDto } from './dto/update-car-product.dto';
import { CarProductRepository } from './repositories/carProducts.repository';
import { NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class CarProductsService {
  constructor(private carRepository: CarProductRepository) {}

  async create(createCarProductDto: CreateCarProductsDto, userId: string) {
    return await this.carRepository.create(createCarProductDto, userId);
  }

  async findAllPagination(
    where?: Prisma.CarProductsWhereInput,
    orderBy?: Prisma.CarProductsOrderByWithRelationInput,
    page?: number,
  ) {
    const findAllCar = await this.carRepository.findAllPagination({
      where,
      orderBy,
      page,
    });
    return findAllCar;
  }

  async findAll() {
    return await this.carRepository.findAll();
  }

  async findLogged(id: string) {
    return await this.carRepository.findLogged(id);
  }

  async findOne(id: string) {
    const findId = await this.carRepository.findOne(id);

    if (!findId) {
      throw new NotFoundException('Car not found!');
    }

    return findId;
  }

  async update(id: string, updateCarProductDto: UpdateCarProductDto, userId: string) {
    const findId = await this.carRepository.findOne(id);

    if (!findId) {
      throw new NotFoundException('Car not found!');
    }

    return await this.carRepository.update(id, updateCarProductDto, userId);
  }

  async remove(id: string, userId: string) {
    const findId = await this.carRepository.findOne(id);

    if (!findId) {
      throw new NotFoundException('Car not found!');
    }

    return await this.carRepository.delete(id, userId);
  }
}
