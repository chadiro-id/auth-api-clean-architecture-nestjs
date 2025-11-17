import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import databaseConfig from '../config/database.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forFeature(databaseConfig)],
      inject: [databaseConfig.KEY],
      useFactory: (config: ConfigType<typeof databaseConfig>) => config.pg,
      dataSourceFactory: async (options: DataSourceOptions) => {
        const dataSource = new DataSource(options);
        return dataSource.initialize();
      },
    }),
  ],
  providers: [],
  exports: [],
})
export class DatabaseModule {}
