import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Address')
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  address: string;

  @Column({ nullable: false })
  phoneNumber: number;

  @CreateDateColumn({ type: 'timestamp', select: false })
  createAt: Date;

  @UpdateDateColumn({ type: 'timestamp', select: false })
  updateAt: Date;
}
