import { Account, Status } from 'src/domain/entities/account';
import {
  AccountContact,
  ContactType,
} from 'src/domain/entities/account-contact';
import {
  AccountProvider,
  ProviderType,
} from 'src/domain/entities/account-provider';
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
    const account = new Account(id, Status.ACTIVE, false, date, null, null);
    const provider = new AccountProvider(
      id,
      ProviderType.EMAIL,
      email,
      password,
      date,
    );
    const contact = new AccountContact(
      id,
      ContactType.EMAIL,
      email,
      true,
      null,
      date,
    );

    await this.accountRepository.create(account, provider, contact);
  }

  async findForLoginByEmail(email: string) {
    return this.accountProviderRepository.findByEmail(email);
  }
}
