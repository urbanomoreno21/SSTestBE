import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne  } from 'typeorm';
import { IsString, IsBoolean, Max, MaxLength, Min, MinLength, IsEmpty } from 'class-validator';
import { Table } from './table.entity';

@Entity("table_structures")
export class TableDetail extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  @MinLength(1)
  @MaxLength(20)
  @IsString()
  header: string;
  
  @Column({ length: 10 })
  @MinLength(1)
  @MaxLength(10)
  @IsString()
  data_type: string;
  
  @Column({nullable: true, length: 20 })
  @IsEmpty()
  @MinLength(1)
  @MaxLength(20)
  @IsString()
  format?: string;
  
  @Column()
  @IsBoolean()
  required: boolean;
  
  @ManyToOne(() => Table, (table) => table.columns)
  table: Table  
}