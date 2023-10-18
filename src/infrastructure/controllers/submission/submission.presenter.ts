import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Submission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  catalog_id: number;

  @Column()
  user_id: string;

  @Column()
  approval_id: string;

  @Column()
  category: string;

  @Column()
  method: string;

  @Column()
  date_start: number;

  @Column()
  date_end: number;

  @Column()
  name: string;

  @Column()
  vendor: string;

  @Column({ nullable: true })
  location?: string;

  @Column()
  note: string;

  @Column({ nullable: true })
  filename?: string;

  @Column()
  cost: number;

  @Column()
  approval: number;

  @Column()
  timecreated: number;

  @Column()
  timemodified: number;

  @Column({ nullable: true })
  job_family_id?: number;

  @Column({ nullable: true })
  fitur_tombok?: boolean;

  @Column({ nullable: true })
  nominal_tombok?: number;

  @Column({ nullable: true })
  tools_category_id?: number;
}
