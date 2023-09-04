/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, Query, Request } from '@nestjs/common';
import { CarProductsService } from './car-products.service';
import { CreateCarProductsDto } from './dto/create-car-product.dto';
import { UpdateCarProductDto } from './dto/update-car-product.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Gasoline, Prisma } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@ApiTags('Cars')
@Controller('cars')
export class CarProductsController {
  constructor(private readonly carProductsService: CarProductsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  create(@Body() createCarProductDto: CreateCarProductsDto, @Request() req) {
    return this.carProductsService.create(createCarProductDto, req.user.id);
  }

  @Get('pagination')
  findAllPagination(
    @Query('orderBy') orderBy?: Prisma.CarProductsOrderByWithRelationInput,
    @Query('page') page?: number,
    @Query('brand') brand?: string,
    @Query('model') model?: string,
    @Query('color') color?: string,
    @Query('year') year?: number,
    @Query('gasoline') gasoline?: Gasoline,
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

  @UseGuards(JwtAuthGuard)
  @Get('logged')
  @ApiBearerAuth()
  findLogged(@Request() req) {
    return this.carProductsService.findLogged(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.carProductsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateCarProductDto: UpdateCarProductDto, @Request() req) {
    return this.carProductsService.update(id, updateCarProductDto, req.user.id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  remove(@Param('id', ParseUUIDPipe) id: string, @Request() req) {
    return this.carProductsService.remove(id, req.user.id);
  }
}
