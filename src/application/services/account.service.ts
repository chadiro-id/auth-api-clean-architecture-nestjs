import { Account } from 'src/domain/entities/account';
import { Identity } from 'src/domain/entities/identity';
import { IdentityRepository } from 'src/domain/repositories/identity.repository';
import { AccountRepository } from 'src/domain/repositories/account.repository';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { User } from 'src/domain/entities/user';

export class AccountService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly accountRepository: AccountRepository,
    private readonly identityRepository: IdentityRepository,
  ) {}

  async existsByEmail(email: string) {
    return this.identityRepository.existsByEmail(email);
  }

  async createWithEmail(
    userId: string,
    accountId: string,
    email: string,
    password: string,
    fullname: string,
  ) {
    const now = new Date();
    const user = new User(userId, fullname, fullname);
    const account = new Account(
      accountId,
      userId,
      password,
      'ACTIVE',
      false,
      now,
    );
    const identity = new Identity(accountId, 'EMAIL', email, now);

    await this.userRepository.save(user, account, identity);
  }

  async findForLoginByEmail(email: string) {
    return this.identityRepository.findByEmail(email);
  }
}
