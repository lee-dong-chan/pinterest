import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { Post } from './post.entity';
import { Comment } from './comment.entity';
import { Common } from './common.entity';

@Entity()
export class User extends Common {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 200, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 128 })
  password: string;

  @Column({ type: 'varchar', length: 128 })
  name: string;

  @Column({ type: 'datetime' })
  birthdate: Date;

  @Column({ type: 'varchar', length: 10, nullable: true })
  userimg: string;

  @OneToMany((type) => Post, (Post) => Post.id)
  post: Relation<Post>[];

  @OneToMany((type) => Comment, (Comment) => Comment.id)
  comment: Relation<Comment>[];
}
