import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany  } from 'typeorm';
import { IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

@Entity("table_data_2")
export class TableData2 extends BaseEntity {
  @PrimaryGeneratedColumn()
  t2c1: number;

  @Column({ nullable: true, length: 50 })
  @MinLength(1)
  @MaxLength(50)
  @IsString()
  t2c2: string;
  
  @Column({ nullable: true})
  t2c3: number;
  
  @Column({type:"datetime"})
  t2c4: any;
  
  @Column()
  t2c5: number;
 
}