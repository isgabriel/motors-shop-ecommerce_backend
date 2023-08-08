/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CarProductsService } from './car-products.service';
import { CarProductsController } from './car-products.controller';
import { PrismaService } from 'src/database/prisma.service';
import { CarProductRepository } from './repositories/carProducts.repository';
import { CarProductPrismaRepository } from './repositories/prisma/cardProducts.prisma';

@Module({
  controllers: [CarProductsController],
  providers: [
    CarProductsService,
    PrismaService,
    {
      provide: CarProductRepository,
      useClass: CarProductPrismaRepository,
    },
  ],
})
export class CarProductsModule {}
