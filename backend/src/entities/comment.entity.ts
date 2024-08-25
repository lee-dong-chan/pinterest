import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { User } from './user.entity';
import { Post } from './post.entity';
import { Common } from './common.entity';

@Entity()
export class Comment extends Common {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 200 })
  content: string;
  @ManyToOne((type) => User, (User) => User.id, {
    eager: true,
    nullable: false,
    onDelete: 'CASCADE',
  })
  user: Relation<User>;
  @ManyToOne((type) => Post, (Post) => Post.id, {
    eager: true,
    nullable: false,
    onDelete: 'CASCADE',
  })
  post: Relation<Post>;
}
