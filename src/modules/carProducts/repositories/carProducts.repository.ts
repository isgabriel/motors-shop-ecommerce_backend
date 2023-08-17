/* eslint-disable prettier/prettier */

import { Prisma } from '@prisma/client';
import { CreateCarProductsDto } from '../dto/create-car-product.dto';
import { UpdateCarProductDto } from '../dto/update-car-product.dto';
import { CarProduct } from '../entities/car-product.entity';
import { PaginatedResult } from '../pagination/car-pagination.interface';

export abstract class CarProductRepository {
  abstract create(data: CreateCarProductsDto, userId: string): Promise<CarProduct>;
  abstract findAllPagination({
    where,
    orderBy,
    page,
  }: {
    where?: Prisma.CarProductsWhereInput;
    orderBy?: Prisma.CarProductsOrderByWithRelationInput;
    page?: number;
  }): Promise<PaginatedResult<CarProduct[]>>;
  abstract findAll(): Promise<CarProduct[]>;
  abstract findLogged(id: string): Promise<CarProduct[]>;
  abstract findOne(id: string): Promise<CarProduct>;
  abstract update(
    id: string,
    data: UpdateCarProductDto,
    userId: string
  ): Promise<CarProduct> | CarProduct;
  abstract delete(id: string, userId: string): Promise<void>;
}
