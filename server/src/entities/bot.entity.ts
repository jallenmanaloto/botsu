import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm'
import { User } from './user.entity';
import { Quirk } from './quirk.entity';

@Entity()
export class Bot {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  styleName: string;

  @Column()
  description: string;

  @ManyToOne(type => User, user => user.bots) user: User;

  @Column()
  userId: string;

  @OneToOne(type => Quirk) @JoinColumn()
  quirk: Quirk;
}
