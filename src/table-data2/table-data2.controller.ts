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
import { TableData2 } from './entities/table-data2.entity';
import { TableData2Service } from './table-data2.service';

@Controller('table-data2')
export class TableData2Controller {
  constructor(private tableData2Service: TableData2Service) {}

  @Get()
  findAll() {
    return this.tableData2Service.getTableData2();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.tableData2Service.findOne(id);
  }

  @Post() 
  create(@Body() tableData2: TableData2) {
    return this.tableData2Service.createTableData2(tableData2);
  }

  @Patch(':id')
  async editTableData2(@Body() tableData2: TableData2, @Param('id') id: number): Promise<TableData2> {
    const tableData2Edited = await this.tableData2Service.editTableData2(id, tableData2);
    return tableData2Edited;
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id) {
    this.tableData2Service.remove(id);
  }
}