import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCommentDto } from 'src/dto/creat-comment.dto';
import { Comment } from 'src/entities/comment.entity';
import { Post } from 'src/entities/post.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(Post)
    private readonly postRepo: Repository<Post>,
    @InjectRepository(Comment)
    private readonly commentRepo: Repository<Comment>,
  ) {}
  async comment(createCommentDto: CreateCommentDto) {
    try {
      const user = await this.userRepo.findOne({
        where: { id: createCommentDto.userId },
      });
      console.log(user);
      const post = await this.postRepo.findOne({
        where: { id: createCommentDto.postId },
      });
      const comment = this.commentRepo.create({
        content: createCommentDto.content,
        user: user,
        post: post,
      });

      await this.commentRepo.save(comment);

      return { result: 'comment ok' };
    } catch (err) {
      console.error(err);
    }
  }
}
