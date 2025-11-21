import { Account } from '../entities/account';
import { AccountContact } from '../entities/account-contact';
import { AccountProvider } from '../entities/identity';

export interface AccountRepository {
  create(
    account: Account,
    provider: AccountProvider,
    contact: AccountContact,
  ): Promise<void>;

  findById(id: string): Promise<Account | null>;
}
