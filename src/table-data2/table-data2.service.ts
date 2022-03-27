import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TableData2 } from './entities/table-data2.entity';

@Injectable()
export class TableData2Service {
  constructor(
    @InjectRepository(TableData2) private tableData2Repository: Repository<TableData2>,
  ) {}
  async getTableData2(): Promise<TableData2[]> {
    return await this.tableData2Repository.find();
  }

  async findOne(id: string): Promise<TableData2> {
    return this.tableData2Repository.findOne(id);
  }

  async createTableData2(tableData2: TableData2) {
    this.tableData2Repository.save(tableData2);
  }

  async remove(id: string): Promise<void> {
    await this.tableData2Repository.delete(id);
  }

  async editTableData2(id: number, tableData2: TableData2): Promise<TableData2> {
    const editedTableData2 = await this.tableData2Repository.findOne(id);
    if (!editedTableData2) {
      throw new NotFoundException('Table Data2 is not found');
    }
    editedTableData2.t2c1 = tableData2.t2c1;
	editedTableData2.t2c2 = tableData2.t2c2;
	editedTableData2.t2c3 = tableData2.t2c3;
	editedTableData2.t2c4 = tableData2.t2c4;
	editedTableData2.t2c5 = tableData2.t2c5;
	
    await editedTableData2.save();
    return editedTableData2;
  }
}
