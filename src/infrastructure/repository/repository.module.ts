import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AccountRepositoryPostgres } from './account.repository.postgres';
import { AuthenticationRepositoryPostgres } from './authentication.repository.postgres';
import { IdentityRepositoryPostgres } from './identity.repository.postgres';
import { UserRepositoryPostgres } from './user.repository.postgres';

@Module({
  imports: [DatabaseModule],
  providers: [
    AccountRepositoryPostgres,
    AuthenticationRepositoryPostgres,
    IdentityRepositoryPostgres,
    UserRepositoryPostgres,
  ],
  exports: [
    AccountRepositoryPostgres,
    AuthenticationRepositoryPostgres,
    IdentityRepositoryPostgres,
    UserRepositoryPostgres,
  ],
})
export class RepositoryModule {}
