import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { Account } from 'src/domain/entities/account';
import { Identity } from 'src/domain/entities/identity';
import { User } from 'src/domain/entities/user';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { PG_POOL_KEY } from '../database/postgres/pg-pool.provider';

@Injectable()
export class UserRepositoryPostgres implements UserRepository {
  constructor(@Inject(PG_POOL_KEY) private readonly pool: Pool) {}

  async saveAggregate(
    user: User,
    account: Account,
    identity: Identity,
  ): Promise<void> {
    const inserUserQuery = {
      text: 'INSERT INTO users VALUES ($1, $2, $3)',
      values: [user.id, user.name, user.createdAt],
    };
    const insertAccountQuery = {
      text: 'INSERT INTO accounts VALUES ($1, $2, $3, $4, $5, $6)',
      values: [
        account.id,
        account.userId,
        account.password,
        account.status,
        account.isDelete,
        account.createdAt,
      ],
    };
    const insertIdentityQuery = {
      text: 'INSERT INTO identities (account_id, provider_type, provider_id, created_at) VALUES ($1, $2, $3, $4)',
      values: [
        identity.accountId,
        identity.providerType,
        identity.providerId,
        identity.createdAt,
      ],
    };

    const client = await this.pool.connect();
    try {
      await client.query('BEGIN');

      await client.query(inserUserQuery);
      await client.query(insertAccountQuery);
      await client.query(insertIdentityQuery);

      await client.query('COMMIT');
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }
  async findById(id: string): Promise<User | null> {
    console.log(id);
    throw new Error('Method not implemented.');
  }
}
