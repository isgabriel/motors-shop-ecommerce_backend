import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CarProductsService } from './car-products.service';
import { CreateCarProductDto } from './dto/create-car-product.dto';
import { UpdateCarProductDto } from './dto/update-car-product.dto';

@Controller('car-products')
export class CarProductsController {
  constructor(private readonly carProductsService: CarProductsService) {}

  @Post()
  create(@Body() createCarProductDto: CreateCarProductDto) {
    return this.carProductsService.create(createCarProductDto);
  }

  @Get()
  findAll() {
    return this.carProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carProductsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCarProductDto: UpdateCarProductDto,
  ) {
    return this.carProductsService.update(id, updateCarProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carProductsService.remove(id);
  }
}
