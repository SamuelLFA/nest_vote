import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int8' })
  choose: number;

  constructor(choose: number) {
    this.choose = choose;
  }
}
