import { SubmissionEntity } from 'src/submission/entity/submission.entity';
import { User } from 'src/user/entity/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity('mdl_lw_accountability')
@Index('mdl_lw_submission_user_id_index', ['user_id'])
@Index('mdl_lw_submission_catalog_id_index', ['submission_id'])
export class AccountabilityEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @Column({ type: 'bigint', unsigned: true })
  submission_id: number;

  @Column({ type: 'varchar' })
  user_id: string;

  @Column({ type: 'bigint', unsigned: true, default: 0 })
  actual_cost: number;

  @Column({ type: 'longtext', collation: 'utf8mb4_unicode_ci' })
  note: string;

  @Column({ type: 'longtext', collation: 'utf8mb4_unicode_ci' })
  sopp: string;

  @Column({ type: 'longtext', collation: 'utf8mb4_unicode_ci', nullable: true })
  filename: string | null;

  @Column({ type: 'int', default: 0 })
  approval: number;

  @Column({ type: 'bigint', unsigned: true })
  timecreated: number;

  @Column({ type: 'bigint', unsigned: true })
  timemodified: number;

  @OneToOne(() => SubmissionEntity)
  @JoinColumn({ name: 'submission_id', referencedColumnName: 'id' })
  submission: SubmissionEntity;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;
}
