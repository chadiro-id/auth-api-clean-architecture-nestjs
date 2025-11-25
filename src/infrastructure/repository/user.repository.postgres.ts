import { Pool } from 'pg';
import { Account } from 'src/domain/entities/account';
import { Identity } from 'src/domain/entities/identity';
import { User } from 'src/domain/entities/user';
import { UserRepository } from 'src/domain/repositories/user.repository';

export class UserRepositoryPostgres implements UserRepository {
  constructor(private readonly pool: Pool) {}

  async saveAggregate(
    user: User,
    account: Account,
    identity: Identity,
  ): Promise<void> {
    console.log(user, account, identity);
    throw new Error('Method not implemented.');
  }
  async findById(id: string): Promise<User | null> {
    console.log(id);
    throw new Error('Method not implemented.');
  }
}
