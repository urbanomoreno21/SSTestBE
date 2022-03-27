import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany  } from 'typeorm';
import { IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

@Entity("table_data_1")
export class TableData1 extends BaseEntity {
  @PrimaryGeneratedColumn()
  t1c1: number;

  @Column({ length: 50 })
  @MinLength(1)
  @MaxLength(50)
  @IsString()
  t1c2: string;
  
  @Column({ nullable: true })
  t1c3: number;
  
  @Column({type:"datetime"})
  t1c4: any;
}