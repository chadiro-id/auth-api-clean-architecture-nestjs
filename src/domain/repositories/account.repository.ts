import { Account } from '../entities/account';
import { Identity } from '../entities/identity';

export interface AccountRepository {
  create(account: Account, identity: Identity): Promise<void>;

  findById(id: string): Promise<Account | null>;
}
