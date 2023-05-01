import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Quirk {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  flag: string;
}
