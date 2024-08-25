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

  @Column({ type: 'varchar', length: 10, unique: true })
  img: string;

  @OneToMany((type) => Post, (Post) => Post.id)
  Post: Relation<Post>[];
}

export const defaultCategorys: Partial<Category>[] = [
  { id: 1, name: '동물', img: 'category1' },
  { id: 2, name: '예술', img: 'category2' },
  { id: 3, name: '미용', img: 'category3' },
  { id: 4, name: '디자인', img: 'category4' },
  { id: 5, name: 'DIY 및 수공예품', img: 'category5' },
  { id: 6, name: '음식 및 음료', img: 'category6' },
  { id: 7, name: '집안 꾸미기', img: 'category7' },
  { id: 8, name: '남성패션', img: 'category8' },
  { id: 9, name: '명언', img: 'category9' },
  { id: 10, name: '문신', img: 'category10' },
  { id: 11, name: '여행', img: 'category11' },
  { id: 12, name: '결혼식', img: 'category12' },
  { id: 13, name: '여성패션', img: 'category13' },
];
