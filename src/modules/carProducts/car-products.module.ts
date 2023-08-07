import { Module } from '@nestjs/common';
import { CarProductsService } from './car-products.service';
import { CarProductsController } from './car-products.controller';

@Module({
  controllers: [CarProductsController],
  providers: [CarProductsService],
})
export class CarProductsModule {}
