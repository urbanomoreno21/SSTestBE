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
import { Table } from './entities/table.entity';
import { TablesService } from './tables.service';

@Controller('tables')
export class TablesController {
  constructor(private tablesService: TablesService) {}

  @Get()
  findAll() {
    return this.tablesService.getTables();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.tablesService.getTableDetail(id);
  }

  @Post() 
  create(@Body() table: Table) {
    return this.tablesService.createTable(table);
  }

  @Patch(':id')
  async editTable(@Body() table: Table, @Param('id') id: number): Promise<Table> {
    const tableEdited = await this.tablesService.editTable(id, table);
    return tableEdited;
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id) {
    this.tablesService.remove(id);
  }
}