import { AccountRepository } from 'src/domain/repositories/account.repository';
import { IdentityRepository } from 'src/domain/repositories/identity.repository';
import { UserRepository } from 'src/domain/repositories/user.repository';

export class RegisterUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly accountRepository: AccountRepository,
    private readonly identityRepository: IdentityRepository,
  ) {}
}
