import { Body, Controller, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from 'src/dto/creat-comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post('/write')
  writecomment(@Body() createCommentDto: CreateCommentDto) {
    console.log(createCommentDto);
    return this.commentService.comment(createCommentDto);
  }
}
