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
import { TableData3 } from './entities/table-data3.entity';
import { TableData3Service } from './table-data3.service';

@Controller('table-data3')
export class TableData3Controller {
  constructor(private tableData3Service: TableData3Service) {}

  @Get()
  findAll() {
    return this.tableData3Service.getTableData3();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.tableData3Service.findOne(id);
  }

  @Post() 
  create(@Body() tableData3: TableData3) {
    return this.tableData3Service.createTableData3(tableData3);
  }

  @Patch(':id')
  async editTableData3(@Body() tableData3: TableData3, @Param('id') id: number): Promise<TableData3> {
    const tableData3Edited = await this.tableData3Service.editTableData3(id, tableData3);
    return tableData3Edited;
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id) {
    this.tableData3Service.remove(id);
  }
}