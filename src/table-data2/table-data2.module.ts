import { Module } from '@nestjs/common';
import { TableData2Service } from './table-data2.service';
import { TableData2Controller } from './table-data2.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TableData2 } from './entities/table-data2.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TableData2])],	
  controllers: [TableData2Controller],
  providers: [TableData2Service]
})
export class TableData2Module {}
