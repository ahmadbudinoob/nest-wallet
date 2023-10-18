import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserKanwil } from './userkanwil.entity';

@Entity()
export class UserArea {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserKanwil, { onDelete: 'CASCADE' })
  kanwil: UserKanwil;

  @Column()
  code: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt: Date;
}
