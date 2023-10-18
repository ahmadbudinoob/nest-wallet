import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Submission } from './submission.entity';

@Entity()
export class LwAccountability {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Submission, { onDelete: 'CASCADE' })
  submission: Submission;

  @Column()
  userId: string;

  @Column()
  actualCost: number;

  @Column()
  note: string;

  @Column()
  sopp: string;

  @Column({ nullable: true })
  filename: string;

  @Column({ default: 0 })
  approval: number;

  @Column()
  timecreated: number;

  @Column()
  timemodified: number;
}
