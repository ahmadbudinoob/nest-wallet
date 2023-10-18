import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserArea } from './userarea.entity';
import { UserKanwil } from './userkanwil.entity';

@Entity()
export class UserCabang {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserKanwil, { onDelete: 'CASCADE' })
  kanwil: UserKanwil;

  @ManyToOne(() => UserArea, { onDelete: 'CASCADE' })
  area: UserArea;

  @Column()
  code: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt: Date;
}
