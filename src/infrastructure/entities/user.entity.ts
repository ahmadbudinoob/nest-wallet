import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @Column({ nullable: true })
  grade?: string;

  @Column()
  gender: string;

  @Column({ nullable: true })
  position?: string;

  @Column({ nullable: true })
  phone?: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  email_verified_at?: Date;

  @Column()
  password: string;

  @Column({ nullable: true })
  remember_token?: string;

  @Column({ nullable: true })
  avatar?: string;

  @Column({ nullable: true })
  kode_grade?: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at?: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at?: Date;

  @Column()
  status: number;
}
