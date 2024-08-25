import { Body, Controller, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from 'src/dto/creat-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Post('/write')
  writepost(@Body() CreatePostDto: CreatePostDto) {
    return this.postService.writepost(CreatePostDto);
  }
}
