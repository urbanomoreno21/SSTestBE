import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TableData1 } from './entities/table-data1.entity';

@Injectable()
export class TableData1Service {
  constructor(
    @InjectRepository(TableData1) private tableData1Repository: Repository<TableData1>,
  ) {}
  async getTableData1(): Promise<TableData1[]> {
    return await this.tableData1Repository.find();
  }

  async findOne(id: string): Promise<TableData1> {
    return this.tableData1Repository.findOne(id);
  }

  async createTableData1(tableData1: TableData1) {
    this.tableData1Repository.save(tableData1);
  }

  async remove(id: string): Promise<void> {
    await this.tableData1Repository.delete(id);
  }

  async editTableData1(id: number, tableData1: TableData1): Promise<TableData1> {
    const editedTableData1 = await this.tableData1Repository.findOne(id);
    if (!editedTableData1) {
      throw new NotFoundException('Table Data1 is not found');
    }
    editedTableData1.t1c1 = tableData1.t1c1;
	editedTableData1.t1c2 = tableData1.t1c2;
	editedTableData1.t1c3 = tableData1.t1c3;
	editedTableData1.t1c4 = tableData1.t1c4;
    await editedTableData1.save();
    return editedTableData1;
  }
}
