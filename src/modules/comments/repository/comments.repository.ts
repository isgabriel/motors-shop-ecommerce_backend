/* eslint-disable prettier/prettier */
import { UpdateCommentDto } from '../dto/update-comment.dto';
import { Comment } from '../entities/comment.entity';
import { CreateCommentDto } from './../dto/create-comment.dto';

export abstract class CommentsRepository {
  abstract create(carProduct: string, userId: string, createCommentDto: CreateCommentDto): Promise<Comment>;
  abstract findOne(id: string): Promise<Comment>;
  abstract findAll(carProduct: string): Promise<Comment[]>;
  abstract update(commentaryId: string, updateCommentDto: UpdateCommentDto): Promise<Comment>;
  abstract delete(id: string): Promise<void>;
}
