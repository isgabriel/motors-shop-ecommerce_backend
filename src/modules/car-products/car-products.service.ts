import { Injectable } from '@nestjs/common';
import { CreateCarProductDto } from './dto/create-car-product.dto';
import { UpdateCarProductDto } from './dto/update-car-product.dto';

@Injectable()
export class CarProductsService {
  create(createCarProductDto: CreateCarProductDto) {
    return 'This action adds a new carProduct';
  }

  findAll() {
    return `This action returns all carProducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carProduct`;
  }

  update(id: number, updateCarProductDto: UpdateCarProductDto) {
    return `This action updates a #${id} carProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} carProduct`;
  }
}
