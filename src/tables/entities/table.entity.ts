import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany  } from 'typeorm';
import { IsString, Max, MaxLength, Min, MinLength } from 'class-validator';
import { TableDetail } from './table-detail.entity';

@Entity("table_types")
export class Table extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  @MinLength(1)
  @MaxLength(30)
  @IsString()
  name: string;
  
  @OneToMany(() => TableDetail, (tabledetail) => tabledetail.table)
  columns: TableDetail[]  
}
