import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UserKanwilEntity } from './user-kanwil.entity';
import { UserAreaEntity } from './user-area.entity';
import { UserCabang } from './user-cabang.entity';

@Entity('mdl_user_unit')
export class UserUnit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  description: string;

  @Column()
  kanwil_id: number;

  @ManyToOne(() => UserKanwilEntity) // Menentukan relasi ManyToOne ke UserKanwilEntity
  @JoinColumn({ name: 'kanwil_id' }) // Kolom yang merujuk pada foreign key
  kanwil: UserKanwilEntity;

  @Column()
  area_id: number;

  @Column()
  cabang_id: number;

  @ManyToOne(() => UserAreaEntity) // Menentukan relasi ManyToOne ke UserKanwilEntity
  @JoinColumn({ name: 'area_id' }) // Kolom yang merujuk pada foreign key
  area: UserAreaEntity;

  @ManyToOne(() => UserCabang)
  @JoinColumn({ name: 'cabang_id' })
  cabang: UserCabang;
}
