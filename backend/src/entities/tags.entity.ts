import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';

import { Common } from './common.entity';
import { Selecttags } from './selecttag.entity';

@Entity()
export class Tags extends Common {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 15, unique: true })
  name: string;

  @OneToMany((type) => Selecttags, (Selecttags) => Selecttags.id)
  Selecttags: Relation<Selecttags>[];
}
