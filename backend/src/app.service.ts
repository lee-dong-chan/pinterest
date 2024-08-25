import { Injectable } from '@nestjs/common';
import { Request } from 'express';

import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { User } from './entities/user.entity';
import { Comment } from './entities/comment.entity';
import { Category, defaultCategorys } from './entities/category.entity';

import { Tags } from './entities/tags.entity';
import { Selecttags } from './entities/selecttag.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
    @InjectRepository(Post)
    private readonly postRepo: Repository<Post>,
    @InjectRepository(Tags)
    private readonly TagsRepo: Repository<Tags>,
    @InjectRepository(Selecttags)
    private readonly selectRepo: Repository<Selecttags>,
    @InjectRepository(Comment)
    private readonly commentRepo: Repository<Comment>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async logcheck(req: Request) {
    if (req.session.user) {
      return { login: 'true' };
    } else {
      return { login: 'false' };
    }
  }

  async userdata(req: Request) {
    if (req.session.user) {
      const userdata = await this.userRepo.findOne({
        where: { id: req.session.user },
      });
      return {
        userid: userdata.id,
        userimg: userdata.userimg,
        username: userdata.name,
      };
    }
  }

  async category() {
    try {
      const category = await this.categoryRepo.find();
      return category;
    } catch (err) {
      console.error(err);
    }
  }

  async searchtag(id?: number, keyword?: string) {
    try {
      if (keyword) {
        const data = await this.TagsRepo.find({
          where: { name: Like(`%${keyword}%`) },
        });
        const tag = data.map((item) => {
          return {
            id: item.id,
            name: item.name,
          };
        });
        return tag;
      }
    } catch (err) {
      console.error(err);
    }
  }

  async getlist(id?: number, keyword?: string) {
    try {
      if (!id && !keyword) {
        const data = await this.postRepo.find();
        const selecttag = await this.selectRepo.find();
        const list = data.map((item) => {
          const tags = selecttag
            .filter((tag) => tag.post.id === item.id)
            .map((item) => {
              return item.tags.name;
            });
          return {
            id: item.id,
            title: item.title,
            img: item.postimg,
            content: item.content,
            tag: tags,
            username: item.user.name,
            userimg: item.user.userimg,
          };
        });
        return list;
      } else if (id) {
        const cate = await this.categoryRepo.findOne({ where: { id: id } });
        const data = await this.postRepo.find({ where: { category: cate } });
        const selecttag = await this.selectRepo.find();
        return data.map((item) => {
          const tags = selecttag
            .filter((tag) => tag.post.id === item.id)
            .map((item) => {
              return item.tags.name;
            });
          console.log(tags);

          return {
            id: item.id,
            title: item.title,
            img: item.postimg,
            content: item.content,
            tag: tags,
            username: item.user.name,
            userimg: item.user.userimg,
          };
        });
      } else if (keyword) {
        const data = await this.postRepo.find({
          where: { title: Like(`%${keyword}%`) },
        });
        const selecttag = await this.selectRepo.find();
        return data.map((item) => {
          const tags = selecttag
            .filter((tag) => tag.post.id === item.id)
            .map((item) => {
              return item.tags.name;
            });

          return {
            id: item.id,
            title: item.title,
            img: item.postimg,
            content: item.content,
            tag: tags,
            username: item.user.name,
            userimg: item.user.userimg,
          };
        });
      }
    } catch (err) {
      console.error(err);
    }
  }
  async getpost(id: number) {
    try {
      const data = await this.postRepo.findOne({ where: { id: id } });
      const tag = (await this.selectRepo.find())
        .filter((item) => item.post.id == data.id)
        .map((item) => {
          return item.tags.name;
        });
      const comment = (await this.commentRepo.find())
        .filter((item) => item.post.id == data.id)
        .map((item) => {
          return {
            user: item.user.name,
            img: item.user.userimg,
            content: item.content,
          };
        });
      return {
        id: data.id,
        title: data.title,
        postimg: data.postimg,
        content: data.content,
        tag: tag,
        postuser: data.user.name,
        postuserimg: data.user.userimg,
        comment: comment,
      };
    } catch (err) {
      console.error(err);
    }
  }

  async myinfo(id: number) {
    try {
      const user = await this.userRepo.findOne({ where: { id: id } });
      const post = (await this.postRepo.find())
        .filter((item) => item.user.id == user.id)
        .map((item) => {
          return { title: item.title, img: item.postimg };
        });
      return { name: user.name, img: user.userimg, post: post };
    } catch (err) {
      console.error(err);
    }
  }
}
