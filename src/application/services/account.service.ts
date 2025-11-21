import { Account } from 'src/domain/entities/account';
import { AccountContact } from 'src/domain/entities/account-contact';
import { Identity } from 'src/domain/entities/identity';
import { AccountContactRepository } from 'src/domain/repositories/account-contact.repository';
import { AccountProviderRepository } from 'src/domain/repositories/account-provider.repository';
import { AccountRepository } from 'src/domain/repositories/account.repository';

export class AccountService {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly accountProviderRepository: AccountProviderRepository,
    private readonly accountContactRepository: AccountContactRepository,
  ) {}

  async existsByEmail(email: string) {
    return this.accountProviderRepository.existsByEmail(email);
  }

  async createWithEmail(id: string, email: string, password: string) {
    const date = new Date();
    const account = new Account(
      id,
      password,
      'ACTIVE',
      false,
      date,
      null,
      null,
    );
    const identity = new Identity(id, 'EMAIL', email, date);
    const contact = new AccountContact(id, 'EMAIL', email, true, null, date);

    await this.accountRepository.create(account, identity, contact);
  }

  async findForLoginByEmail(email: string) {
    return this.accountProviderRepository.findByEmail(email);
  }
}
