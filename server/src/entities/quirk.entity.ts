import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm'
import * as bcrypt from 'bcrypt'
import { Bot } from './bot.entity';

@Entity()
export class Quirk {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;
}
