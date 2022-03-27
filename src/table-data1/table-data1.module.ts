import { Module } from '@nestjs/common';
import { TableData1Service } from './table-data1.service';
import { TableData1Controller } from './table-data1.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TableData1 } from './entities/table-data1.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TableData1])],	
  controllers: [TableData1Controller],
  providers: [TableData1Service]
})
export class TableData1Module {}
