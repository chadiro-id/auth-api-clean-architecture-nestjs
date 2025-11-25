import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PgPoolProvider } from './postgres/pg-pool.provider';
import databaseConfig from '../config/database.config';

@Module({
  imports: [ConfigModule.forFeature(databaseConfig)],
  providers: [PgPoolProvider],
  exports: [PgPoolProvider],
})
export class DatabaseModule {}
