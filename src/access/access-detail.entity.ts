import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { AccessEntity } from './access.entity';

@Entity({ name: 'mdl_access_detail' })
export class AccessDetailEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  type_id: number;

  @ManyToOne(() => AccessEntity)
  @JoinColumn({ name: 'access_id', referencedColumnName: 'id' })
  access: AccessEntity;

  @Column({
    type: 'enum',
    enum: ['Y', 'N'],
    charset: 'latin1',
    collation: 'latin1_general_ci',
    default: 'N',
  })
  access_id: string;

  @Column({
    type: 'enum',
    enum: ['Y', 'N'],
    charset: 'latin1',
    collation: 'latin1_general_ci',
    default: 'N',
  })
  view: string;

  @Column({
    type: 'enum',
    enum: ['Y', 'N'],
    charset: 'latin1',
    collation: 'latin1_general_ci',
    default: 'N',
  })
  add: string;

  @Column({
    type: 'enum',
    enum: ['Y', 'N'],
    charset: 'latin1',
    collation: 'latin1_general_ci',
    default: 'N',
  })
  edit: string;

  @Column({
    type: 'enum',
    enum: ['Y', 'N'],
    charset: 'latin1',
    collation: 'latin1_general_ci',
    default: 'N',
  })
  delete: string;

  @Column({
    type: 'enum',
    enum: ['Y', 'N'],
    charset: 'latin1',
    collation: 'latin1_general_ci',
    default: 'N',
  })
  approval: string;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at: Date;
}
