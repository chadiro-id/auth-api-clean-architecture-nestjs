import { Pool } from 'pg';
import { Account } from 'src/domain/entities/account';
import { ProviderType } from 'src/domain/entities/identity';
import { AccountRepository } from 'src/domain/repositories/account.repository';

export class AccountRepositoryPostgres implements AccountRepository {
  constructor(private readonly pool: Pool) {}

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
