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
  Query,
} from '@nestjs/common';
import { CarProductsService } from './car-products.service';
import { CreateCarProductsDto } from './dto/create-car-product.dto';
import { UpdateCarProductDto } from './dto/update-car-product.dto';
import { ApiTags } from '@nestjs/swagger';
import { Gasoline, Prisma } from '@prisma/client';

@ApiTags('Cars')
@Controller('cars')
export class CarProductsController {
  constructor(private readonly carProductsService: CarProductsService) {}

  @Post()
  create(@Body() createCarProductDto: CreateCarProductsDto) {
    return this.carProductsService.create(createCarProductDto);
  }

  @Get('pagination')
  findAllPagination(
    @Query('orderBy') orderBy?: Prisma.CarProductsOrderByWithRelationInput,
    @Query('page') page?: number,
    @Query('brand') brand?: string,
    @Query('model') model?: string,
    @Query('color') color?: string,
    @Query('year') year?: number,
    @Query('gaosline') gasoline?: Gasoline,
    @Query('maxPrice') maxPrice?: number,
    @Query('minPrice') minPrice?: number,
    @Query('maxKM') maxKM?: number,
    @Query('minKM') minKM?: number,
  ) {
    return this.carProductsService.findAllPagination(
      {
        brand,
        color,
        gasoline,
        model,
        year,
        price: { lte: maxPrice, gte: minPrice },
        km: { lte: maxKM, gte: minKM },
      },
      orderBy,
      page,
    );
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
