import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AuthenticationRepositoryPostgres } from './authentication.repository.postgres';
import { UserRepositoryPostgres } from './user.repository.postgres';

@Module({
  imports: [DatabaseModule],
  providers: [AuthenticationRepositoryPostgres, UserRepositoryPostgres],
  exports: [AuthenticationRepositoryPostgres, UserRepositoryPostgres],
})
export class RepositoryModule {}
