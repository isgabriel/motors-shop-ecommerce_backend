/* eslint-disable prettier/prettier */
import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { CommentsRepository } from './repository/comments.repository';
import { CarProductRepository } from '../carProducts/repositories/carProducts.repository';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
  constructor(private commentsRepository: CommentsRepository, private carProductRepository: CarProductRepository) {}

  async create(carProductId: string, userId: string, createCommentDto: CreateCommentDto) {
    const data = await this.carProductRepository.findOne(carProductId);

    if (!data) {
      throw new NotFoundException('Car not found!');
    }
    return await this.commentsRepository.create(carProductId, userId, createCommentDto);
  }

  async findAll(carProductId: string) {
    return await this.commentsRepository.findAll(carProductId);
  }

  async update(commentaryId: string, userId: string, updateCommentDto: UpdateCommentDto) {
    const data = await this.commentsRepository.findOne(commentaryId);

    if (!data) {
      throw new NotFoundException('Comment not found!');
    }

    if (data.userId !== userId) {
      throw new NotFoundException('insufficient permissions!');
    }
    return await this.commentsRepository.update(commentaryId, updateCommentDto);
  }

  async remove(commentaryId: string, userId: string) {
    const data = await this.commentsRepository.findOne(commentaryId);
    if (!data) {
      throw new NotFoundException('Comment not found!');
    }

    if (data.userId !== userId) {
      throw new NotFoundException('insufficient permissions!');
    }
    return await this.commentsRepository.delete(commentaryId);
  }
}
