/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CarProductsService } from './car-products.service';
import { CreateCarProductsDto } from './dto/create-car-product.dto';
import { UpdateCarProductDto } from './dto/update-car-product.dto';

@Controller('cars')
export class CarProductsController {
  constructor(private readonly carProductsService: CarProductsService) {}

  @Post()
  create(@Body() createCarProductDto: CreateCarProductsDto) {
    return this.carProductsService.create(createCarProductDto);
  }

  @Get()
  findAll() {
    return this.carProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.carProductsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarProductDto: UpdateCarProductDto,
  ) {
    return this.carProductsService.update(id, updateCarProductDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.carProductsService.remove(id);
  }
}
