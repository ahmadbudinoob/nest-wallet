import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'mdl_user_cabang' })
export class UserCabang {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  kanwil_id: number;

  @Column()
  area_id: number;

  @Column()
  code: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
