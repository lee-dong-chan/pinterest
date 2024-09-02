import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { User } from './user.entity';
import { Category } from './category.entity';
import { Comment } from './comment.entity';
import { Common } from './common.entity';

@Entity()
export class Post extends Common {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 100 })
  title: string;

  @Column({ type: 'varchar', length: 500 })
  content: string;

  @Column({ type: 'varchar', length: 30 })
  postimg: string;

  @ManyToOne((type) => User, (User) => User.id, {
    nullable: false,
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn()
  user: Relation<User>;

  @ManyToOne((type) => Category, (Category) => Category.id, {
    nullable: false,
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn()
  category: Relation<Category>;

  @OneToMany((type) => Comment, (Comment) => Comment.id)
  Comment: Relation<Comment>[];
}
