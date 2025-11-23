import { AccountRepository } from 'src/domain/repositories/account.repository';
import { UserRepository } from 'src/domain/repositories/user.repository';

export class UserLoginUseCase {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly userRepository: UserRepository,
  ) {}

  async execute() {}
}
