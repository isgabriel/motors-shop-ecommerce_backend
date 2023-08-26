/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CarProductsModule } from './modules/carProducts/car-products.module';
import { ImgModule } from './modules/imgCar/img.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { AddressesModule } from './modules/address/address.module';
import { CommentsModule } from './modules/comments/comments.module';

@Module({
  imports: [CarProductsModule, ImgModule, AddressesModule, UsersModule, AuthModule, CommentsModule],
})
export class AppModule {}
