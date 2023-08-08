/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { CarProductsController } from './modules/carProducts/car-products.controller';
import { CarProductsService } from './modules/carProducts/car-products.service';
import { CarProductRepository } from './modules/carProducts/repositories/carProducts.repository';
import { CarProductPrismaRepository } from './modules/carProducts/repositories/prisma/cardProducts.prisma';

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
export class AppModule {}
