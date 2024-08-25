import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from 'src/entities/post.entity';
import { Category } from 'src/entities/category.entity';
import { Tags } from 'src/entities/tags.entity';
import { Selecttags } from 'src/entities/selecttag.entity';
import { User } from 'src/entities/user.entity';
import { Comment } from 'src/entities/comment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post, Category, Comment, Tags, Selecttags, User]),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
