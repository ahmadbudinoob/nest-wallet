import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserKanwil {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt: Date;
}
