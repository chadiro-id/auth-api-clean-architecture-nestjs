import { AccountProvider } from '../entities/identity';

export interface AccountProviderRepository {
  save(accountProvider: AccountProvider): Promise<AccountProvider | null>;
  findAllByAccountId(accountId: string): Promise<AccountProvider[]>;
  existsByEmail(email: string): Promise<boolean>;
  findByEmail(email: string): Promise<AccountProvider | null>;
}
