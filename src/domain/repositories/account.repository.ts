import { Account } from '../entities/account';

export interface AccountRepository {
  save(account: Account): Promise<Account | null>;
  findById(id: string): Promise<Account | null>;
}
