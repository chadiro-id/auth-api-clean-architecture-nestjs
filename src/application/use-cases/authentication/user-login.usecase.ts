import { AccountRepository } from 'src/domain/repositories/account.repository';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { UserLoginDto } from './dtos/user-login.dto';
import { PasswordHasher } from 'src/application/services/password-hasher';

export class UserLoginUseCase {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly userRepository: UserRepository,
    private readonly passwordHasher: PasswordHasher,
  ) {}

  async execute(dto: UserLoginDto) {
    const account = await this.accountRepository.findByProvider(
      dto.type,
      dto.identifier,
    );
    if (account === null) {
      throw new Error('Invalid credentials');
    }

    const isMatch = await this.passwordHasher.compare(
      dto.password,
      account.password as string,
    );
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }
  }
}
