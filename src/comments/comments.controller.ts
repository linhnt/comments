import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller()
export class CommentsController {

  constructor(
    private commentService: CommentsService
  ) {}

  @Get('posts/:id/comments')
  async postComments(
    @Param('id') id: number,
  ) {
    return this.commentService.find({
      where: {
        post_id: id,
      }
    });
  }

  @Post('comments')
  async create(
    @Body('post_id') post_id: number,
    @Body('text') text: string,
  ) {
    return this.commentService.create({
      post_id,
      text,
    });
  }
}
