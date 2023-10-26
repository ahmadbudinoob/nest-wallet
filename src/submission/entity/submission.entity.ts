import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../user/entity/user.entity';

@Entity({ name: 'mdl_lw_submission' })
export class SubmissionEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'bigint' })
  catalog_id: number;

  @Column({ type: 'varchar' })
  user_id: string;

  @Column({ type: 'varchar', length: 10 })
  approval_id: string;

  @Column({
    type: 'varchar',
    length: 50,
    collation: 'utf8mb4_unicode_ci',
    default: 'Learning Program',
  })
  category: string;

  @Column({
    type: 'varchar',
    length: 50,
    collation: 'utf8mb4_unicode_ci',
    default: 'Learning Program',
  })
  method: string;

  @Column({ type: 'bigint' })
  date_start: number;

  @Column({ type: 'bigint' })
  date_end: number;

  @Column({ type: 'varchar', length: 100, collation: 'utf8mb4_unicode_ci' })
  name: string;

  @Column({ type: 'varchar', length: 100, collation: 'utf8mb4_unicode_ci' })
  vendor: string;

  @Column({
    type: 'varchar',
    length: 100,
    collation: 'utf8mb4_unicode_ci',
    nullable: true,
  })
  location: string;

  @Column({ type: 'longtext', collation: 'utf8mb4_unicode_ci' })
  note: string;

  @Column({ type: 'longtext', collation: 'utf8mb4_unicode_ci', nullable: true })
  filename: string;

  @Column({ type: 'bigint' })
  cost: number;

  @Column({ type: 'int' })
  approval: number;

  @Column({ type: 'bigint' })
  timecreated: number;

  @Column({ type: 'bigint' })
  timemodified: number;

  @Column({ type: 'int', nullable: true })
  job_family_id: number;

  @Column({ type: 'tinyint', default: 0 })
  fitur_tombok: number;

  @Column({ type: 'bigint', nullable: true })
  nominal_tombok: number;

  @Column({ type: 'int', nullable: true })
  tools_category_id: number;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;
}
