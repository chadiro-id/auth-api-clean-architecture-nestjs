import { Account } from '../entities/account';
import { ProviderType } from '../entities/identity';

export interface AccountRepository {
  findById(id: string): Promise<Account | null>;
  findByProvider(
    providerType: ProviderType,
    providerId: string,
  ): Promise<Account | null>;
}
