import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { UserUnit } from './user-unit.entity';

@Entity('mdl_users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  unit_id: number;

  @Column()
  access_id: number;

  @Column()
  head_id: string;

  @Column()
  username: string;

  @Column()
  auth: string;

  @Column()
  name: string;

  @Column()
  grade: string;

  @Column()
  position: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column({ type: 'timestamp', nullable: true })
  email_verified_at: Date | null;

  @Column()
  password: string;

  @Column({ nullable: true })
  remember_token: string | null;

  @Column({ type: 'text', nullable: true })
  avatar: string | null;

  @Column()
  kode_grade: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ default: 1 })
  status: number;

  @Column({ default: 'L' })
  gender: string;

  @OneToOne(() => UserUnit)
  @JoinColumn({ name: 'unit_id', referencedColumnName: 'id' })
  unit: UserUnit;
}
