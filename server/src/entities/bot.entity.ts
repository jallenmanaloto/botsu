import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

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
}
