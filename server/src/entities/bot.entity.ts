import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { User } from './user.entity';

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

    @Column()
    quirk: string;

    @ManyToOne(type => User, user => user.bots) user: User;
}
