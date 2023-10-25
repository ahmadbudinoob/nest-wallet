import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UserKanwilEntity } from './user-kanwil.entity'; // Pastikan import entitas UserKanwilEntity jika belum diimport.

@Entity({ name: 'mdl_user_area' })
export class UserAreaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserKanwilEntity)
  @JoinColumn({ name: 'kanwil_id' })
  kanwil: UserKanwilEntity;

  @Column({
    type: 'varchar',
    length: 255,
    charset: 'latin1',
    collation: 'latin1_general_ci',
  })
  code: string;

  @Column({
    type: 'varchar',
    length: 255,
    charset: 'latin1',
    collation: 'latin1_general_ci',
  })
  description: string;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at: Date;
}
