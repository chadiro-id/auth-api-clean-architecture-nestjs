import { Account } from 'src/domain/entities/account';
import { Identity } from 'src/domain/entities/identity';
import { IdentityRepository } from 'src/domain/repositories/identity.repository';
import { AccountRepository } from 'src/domain/repositories/account.repository';

export class AccountService {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly identityRepository: IdentityRepository,
  ) {}

  async existsByEmail(email: string) {
    return this.identityRepository.existsByEmail(email);
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

    await this.accountRepository.create(account, identity);
  }

  async findForLoginByEmail(email: string) {
    return this.identityRepository.findByEmail(email);
  }
}
