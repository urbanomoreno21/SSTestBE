import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany  } from 'typeorm';
import { IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

@Entity("table_data_3")
export class TableData3 extends BaseEntity {
  @PrimaryGeneratedColumn()
  t3c1: number;

  @Column({ length: 50 })
  @MinLength(1)
  @MaxLength(50)
  @IsString()
  t3c2: string;
  
  @Column({type:"datetime"})
  t3c3: any;
}