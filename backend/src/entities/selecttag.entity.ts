import { Entity, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';

import { Common } from './common.entity';

import { Post } from './post.entity';
import { Tags } from './tags.entity';

@Entity()
export class Selecttags extends Common {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;
  @ManyToOne((type) => Post, (Post) => Post.id, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  post: Relation<Post>;

  @ManyToOne((type) => Tags, (Tags) => Tags.id, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  Tags: Relation<Tags>;
}
