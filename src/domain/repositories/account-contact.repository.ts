import { AccountContact } from '../entities/account-contact';

export interface AccountContactRepository {
  save(accountContact: AccountContact): Promise<AccountContact | null>;
  findAllByAccountId(accountId: string): Promise<AccountContact[]>;
}
