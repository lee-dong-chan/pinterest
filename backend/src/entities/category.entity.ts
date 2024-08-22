import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';

import { Post } from './post.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 10, unique: true })
  name: string;

  @OneToMany((type) => Post, (Post) => Post.id)
  Post: Relation<Post>[];
}
