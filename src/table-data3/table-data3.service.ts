import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TableData3 } from './entities/table-data3.entity';

@Injectable()
export class TableData3Service {
  constructor(
    @InjectRepository(TableData3) private tableData3Repository: Repository<TableData3>,
  ) {}
  async getTableData3(): Promise<TableData3[]> {
    return await this.tableData3Repository.find();
  }

  async findOne(id: string): Promise<TableData3> {
    return this.tableData3Repository.findOne(id);
  }

  async createTableData3(tableData3: TableData3) {
    this.tableData3Repository.save(tableData3);
  }

  async remove(id: string): Promise<void> {
    await this.tableData3Repository.delete(id);
  }

  async editTableData3(id: number, tableData3: TableData3): Promise<TableData3> {
    const editedTableData3 = await this.tableData3Repository.findOne(id);
    if (!editedTableData3) {
      throw new NotFoundException('Table Data3 is not found');
    }
    editedTableData3.t3c1 = tableData3.t3c1;
	editedTableData3.t3c2 = tableData3.t3c2;
	editedTableData3.t3c3 = tableData3.t3c3;
    await editedTableData3.save();
    return editedTableData3;
  }
}
