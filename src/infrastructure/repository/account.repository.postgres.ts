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
    console.log(providerType, providerId);
    throw new Error('Method not implemented.');
  }
}
