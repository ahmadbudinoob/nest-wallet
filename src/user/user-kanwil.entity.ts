import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'mdl_user_kanwil' })
export class UserKanwilEntity {
  @PrimaryGeneratedColumn()
  id: number;

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
