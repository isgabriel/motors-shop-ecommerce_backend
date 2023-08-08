/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateCarProductsDto } from './dto/create-car-product.dto';
import { UpdateCarProductDto } from './dto/update-car-product.dto';
import { CarProductRepository } from './repositories/carProducts.repository';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class CarProductsService {
  constructor(private carRepository: CarProductRepository) {}

  async create(createCarProductDto: CreateCarProductsDto) {
    return await this.carRepository.create(createCarProductDto);
  }

  async findAll() {
    return await this.carRepository.findAll();
  }

  async findOne(id: string) {
    const findId = await this.carRepository.findOne(id);

    if (!findId) {
      throw new NotFoundException('Car not found!');
    }

    return findId;
  }

  async update(id: string, updateCarProductDto: UpdateCarProductDto) {
    const findId = await this.carRepository.findOne(id);

    if (!findId) {
      throw new NotFoundException('Car not found!');
    }

    return await this.carRepository.update(id, updateCarProductDto);
  }

  async remove(id: string) {
    const findId = await this.carRepository.findOne(id);

    if (!findId) {
      throw new NotFoundException('Car not found!');
    }

    return await this.carRepository.delete(id);
  }
}
