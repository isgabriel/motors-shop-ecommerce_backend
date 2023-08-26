/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CommentsRepository } from '../comments.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateCommentDto } from '../../dto/create-comment.dto';
import { Comment } from '../../entities/comment.entity';
import { UpdateCommentDto } from '../../dto/update-comment.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class CommentsPrismaRepository implements CommentsRepository {
  constructor(private prisma: PrismaService) {}

  async create(carProductId: string, userId: string, createCommentDto: CreateCommentDto): Promise<Comment> {
    const commentsData = await this.prisma.comments.create({
      data: {
        comment: createCommentDto.comment,
        carProducts: {
          connect: { id: carProductId },
        },
        user: {
          connect: { id: userId },
        },
      },
    });
    return plainToInstance(Comment, commentsData);
  }

  async findOne(id: string): Promise<Comment> {
    const commentsData = await this.prisma.comments.findUnique({
      where: { id },
    });
    return plainToInstance(Comment, commentsData);
  }

  async findAll(userId: string): Promise<Comment[]> {
    const commentsData = await this.prisma.comments.findMany({
      where: { userId },
      include: {
        user: {
          select: { name: true },
        },
      },
    });
    return plainToInstance(Comment, commentsData);
  }

  async update(commentaryId: string, updateCommentDto: UpdateCommentDto): Promise<Comment> {
    const commentsData = await this.prisma.comments.update({
      where: { id: commentaryId },
      data: { ...updateCommentDto },
    });
    return plainToInstance(Comment, commentsData);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.comments.delete({
      where: { id },
    });
  }
}
