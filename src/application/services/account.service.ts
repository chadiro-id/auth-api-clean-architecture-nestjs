import { AccountContactRepository } from 'src/domain/repositories/account-contact.repository';
import { AccountProviderRepository } from 'src/domain/repositories/account-provider.repository';
import { AccountRepository } from 'src/domain/repositories/account.repository';

export class AccountService {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly accountProviderRepository: AccountProviderRepository,
    private readonly accountContactRepository: AccountContactRepository,
  ) {}
}
