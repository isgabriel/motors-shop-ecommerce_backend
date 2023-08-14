/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CarProductsModule } from './modules/carProducts/car-products.module';
import { ImgModule } from './modules/imgCar/img.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [CarProductsModule, ImgModule, UsersModule, AuthModule],
})
export class AppModule {}
