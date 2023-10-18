import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserUnit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  kanwilId: number;

  @Column()
  areaId: number;

  @Column()
  cabangId: number;

  @Column()
  code: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt: Date;
}
