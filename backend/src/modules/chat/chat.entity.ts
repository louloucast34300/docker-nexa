import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('chats')
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  breed?: string;

  @Column({ nullable: true })
  age?: number;
}