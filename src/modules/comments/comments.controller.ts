/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Param, Delete, Request, UseGuards, Get, Patch, ParseUUIDPipe } from '@nestjs/common';
import { CommentService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags("Comments")
@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  create(@Body() createCommentDto: CreateCommentDto, @Param('id') carProductId: string, @Request() req) {
    return this.commentService.create(carProductId, req.user.id, createCommentDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) carProductId: string) {
    return this.commentService.findAll(carProductId);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  update(@Body() updateCommentDto: UpdateCommentDto, @Param('id') carProductId: string, @Request() req) {
    return this.commentService.update(carProductId, req.user.id, updateCommentDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  remove(@Param('id') commentaryId: string, @Request() req) {
    return this.commentService.remove(commentaryId, req.user.id);
  }
}
