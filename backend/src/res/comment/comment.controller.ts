import { Body, Controller, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from 'src/dto/create-comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post('/write')
  writecomment(@Body() createCommentDto: CreateCommentDto) {
    console.log('DTO:', createCommentDto);
    return this.commentService.comment(createCommentDto);
  }
}
