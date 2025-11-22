import { AccountRepository } from 'src/domain/repositories/account.repository';
import { IdentityRepository } from 'src/domain/repositories/identity.repository';
import { UserRepository } from 'src/domain/repositories/user.repository';

export class CreateAccountUseCase {
  constructor(
    private accountRepository: AccountRepository,
    private userRepository: UserRepository,
    private identityRepository: IdentityRepository,
  ) {}

  async execute() {}
}
