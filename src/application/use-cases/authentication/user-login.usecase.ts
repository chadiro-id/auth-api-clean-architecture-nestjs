import { AccountRepository } from 'src/domain/repositories/account.repository';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { UserLoginDto } from './dtos/user-login.dto';

export class UserLoginUseCase {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly userRepository: UserRepository,
  ) {}

  async execute(dto: UserLoginDto) {
    const account = await this.accountRepository.findByProvider(
      dto.type,
      dto.identifier,
    );
    if (account === null) {
      throw new Error('Invalid credentials');
    }
  }
}
