import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { Account } from 'src/domain/entities/account';
import { ProviderType } from 'src/domain/entities/identity';
import { AccountRepository } from 'src/domain/repositories/account.repository';
import { PG_POOL_KEY } from '../database/postgres/pg-pool.provider';

@Injectable()
export class AccountRepositoryPostgres implements AccountRepository {
  constructor(@Inject(PG_POOL_KEY) private readonly pool: Pool) {}

  async findById(id: string): Promise<Account | null> {
    console.log(id);
    throw new Error('Method not implemented.');
  }

  async findByProvider(
    providerType: ProviderType,
    providerId: string,
  ): Promise<Account | null> {
    const query = {
      text: 'SELECT a.* FROM accounts a LEFT JOIN identitites i ON a.id = i.account_id WHERE i.provider_type = $1 AND i.provider_id = $2',
      values: [providerType, providerId],
    };

    const result = await this.pool.query(query);
    if (result.rows.length === 0) {
      return null;
    }
    const row = result.rows[0];
    return new Account(
      row.id as string,
      row.user_id as string,
      row.password as string,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      row.status,
      row.is_delete as boolean,
      row.created_at as Date,
    );
  }
}
