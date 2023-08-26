/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CarProductsService } from '../carProducts/car-products.service';
import { PrismaService } from 'src/database/prisma.service';
import { CommentsRepository } from './repository/comments.repository';
import { CommentsPrismaRepository } from './repository/prisma/commets.repository';
import { CarProductRepository } from '../carProducts/repositories/carProducts.repository';
import { CarProductPrismaRepository } from '../carProducts/repositories/prisma/cardProducts.prisma';
import { CommentService } from './comments.service';
import { CommentController } from './comments.controller';

@Module({
  imports: [],
  controllers: [CommentController],
  providers: [
    CommentService,
    CarProductsService,
    PrismaService,
    {
      provide: CommentsRepository,
      useClass: CommentsPrismaRepository,
    },
    {
      provide: CarProductRepository,
      useClass: CarProductPrismaRepository,
    },
  ],
})
export class CommentsModule {}
