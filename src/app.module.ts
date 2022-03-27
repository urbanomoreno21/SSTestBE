import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TablesModule } from './tables/tables.module';
import { TableData1Module } from './table-data1/table-data1.module';
import { TableData2Module } from './table-data2/table-data2.module';
import { TableData3Module } from './table-data3/table-data3.module';

@Module({
  imports: [TypeOrmModule.forRoot(), TablesModule, TableData1Module, TableData2Module, TableData3Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}