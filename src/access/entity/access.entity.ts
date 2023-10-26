import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'mdl_access' })
export class AccessEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', unsigned: true, default: 0 })
  sort: number;

  @Column({ length: 100, charset: 'latin1', collation: 'latin1_general_ci' })
  category: string;

  @Column({ length: 255, charset: 'latin1', collation: 'latin1_general_ci' })
  access: string;

  @Column({ length: 255, charset: 'latin1', collation: 'latin1_general_ci' })
  description: string;

  @Column({
    type: 'enum',
    enum: ['Y', 'N'],
    charset: 'latin1',
    collation: 'latin1_general_ci',
    default: 'N',
  })
  role: string;

  @Column({
    type: 'enum',
    enum: ['Y', 'N'],
    charset: 'latin1',
    collation: 'latin1_general_ci',
    default: 'N',
  })
  status: string;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at: Date;
}
