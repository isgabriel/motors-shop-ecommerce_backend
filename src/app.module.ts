/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CarProductsModule } from './modules/carProducts/car-products.module';
import { ImgModule } from './modules/imgCar/img.module';

@Module({
  imports: [CarProductsModule, ImgModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
