import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Table } from './entities/table.entity';
import { TableDetail } from './entities/table-detail.entity';

@Injectable()
export class TablesService {
  constructor(
    @InjectRepository(Table) private tablesRepository: Repository<Table>,
  ) {}
  async getTables(): Promise<Table[]> {
    return await this.tablesRepository.find();
  }

  async getTableDetail(id: string): Promise<Table> {
    return this.tablesRepository.findOne(id,{relations: ['columns']});
  }

  async createTable(table: Table) {
    this.tablesRepository.save(table);
  }

  async remove(id: string): Promise<void> {
    await this.tablesRepository.delete(id);
  }

  async editTable(id: number, table: Table): Promise<Table> {
    const editedTable = await this.tablesRepository.findOne(id);
    if (!editedTable) {
      throw new NotFoundException('Table is not found');
    }
    editedTable.name = table.name;
    await editedTable.save();
    return editedTable;
  }
}
