import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from 'src/dto/creat-post.dto';
import { Category } from 'src/entities/category.entity';
import { Post } from 'src/entities/post.entity';
import { Selecttags } from 'src/entities/selecttag.entity';
import { Tags } from 'src/entities/tags.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(Post)
    private readonly postRepo: Repository<Post>,
    @InjectRepository(Tags)
    private readonly TagsRepo: Repository<Tags>,
    @InjectRepository(Selecttags)
    private readonly selectRepo: Repository<Selecttags>,
  ) {}
  async writepost(createPostDto: CreatePostDto) {
    try {
      const category: Category = await this.categoryRepo.findOne({
        where: { id: createPostDto.categoryid },
      });
      const user: User = await this.userRepo.findOne({
        where: { id: createPostDto.categoryid },
      });

      const post = this.postRepo.create({
        title: createPostDto.title,
        content: createPostDto.content,
        postimg: createPostDto.postimg,
        category: category,
        user: user,
      });
      await this.postRepo.save(post);
      console.log(createPostDto.tags);
      createPostDto.tags.forEach(async (item) => {
        if (!item.id) {
          const tags = this.TagsRepo.create({
            name: item.name,
          });
          await this.TagsRepo.save(tags);
        } else {
          const tag = await this.TagsRepo.findOne({
            where: { name: item.name },
          });

          const select = this.selectRepo.create({
            post: post,
            tags: tag,
          });

          await this.selectRepo.save(select);
        }
      });
      return { result: 'post ok' };
    } catch (err) {
      console.error(err);
    }
  }
}
