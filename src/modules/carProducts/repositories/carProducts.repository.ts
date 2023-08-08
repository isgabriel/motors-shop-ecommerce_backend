/* eslint-disable prettier/prettier */
import { CreateCarProductsDto } from '../dto/create-car-product.dto';
import { UpdateCarProductDto } from '../dto/update-car-product.dto';
import { CarProduct } from '../entities/car-product.entity';

export abstract class CarProductRepository {
  abstract create(data: CreateCarProductsDto): Promise<CarProduct>;
  abstract findAll(): Promise<CarProduct[]>;
  abstract findOne(id: string): Promise<CarProduct>;
  abstract update(
    id: string,
    data: UpdateCarProductDto,
  ): Promise<CarProduct> | CarProduct;
  abstract delete(id: string): Promise<void>;
}
