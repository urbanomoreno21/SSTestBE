import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { TableData1 } from './entities/table-data1.entity';
import { TableData1Service } from './table-data1.service';

@Controller('table-data1')
export class TableData1Controller {
  constructor(private tableData1Service: TableData1Service) {}

  @Get()
  findAll() {
    return this.tableData1Service.getTableData1();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.tableData1Service.findOne(id);
  }

  @Post() 
  create(@Body() tableData1: TableData1) {
    return this.tableData1Service.createTableData1(tableData1);
  }

  @Patch(':id')
  async editTableData1(@Body() tableData1: TableData1, @Param('id') id: number): Promise<TableData1> {
    const tableData1Edited = await this.tableData1Service.editTableData1(id, tableData1);
    return tableData1Edited;
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id) {
    this.tableData1Service.remove(id);
  }
}