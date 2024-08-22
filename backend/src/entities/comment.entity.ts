import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { User } from './user.entity';
import { Post } from './post.entity';
import { Common } from './common.entity';
import { Selecttags } from './selecttag.entity';

@Entity()
export class Comment extends Common {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 200 })
  content: string;
  @ManyToOne((type) => User, (User) => User.id, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  user: Relation<User>;
  @ManyToOne((type) => Post, (Post) => Post.id, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  Post: Relation<Post>;
  @OneToMany((type) => Selecttags, (Selecttags) => Selecttags.id)
  selecttag: Relation<Selecttags>[];
}
