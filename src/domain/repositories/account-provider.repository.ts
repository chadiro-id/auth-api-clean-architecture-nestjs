import { AccountProvider } from '../entities/account-provider';

export interface AccountProviderRepository {
  save(accountProvider: AccountProvider): Promise<AccountProvider | null>;
  findAllByAccountId(accountId: string): Promise<AccountProvider[]>;
  existsByEmail(email: string): Promise<boolean>;
}
