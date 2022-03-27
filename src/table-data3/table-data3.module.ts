import { Module } from '@nestjs/common';
import { TableData3Service } from './table-data3.service';
import { TableData3Controller } from './table-data3.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TableData3 } from './entities/table-data3.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TableData3])],	
  controllers: [TableData3Controller],
  providers: [TableData3Service]
})
export class TableData3Module {}
