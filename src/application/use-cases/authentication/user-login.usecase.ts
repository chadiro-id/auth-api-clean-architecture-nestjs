import { AccountRepository } from 'src/domain/repositories/account.repository';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { UserLoginDto } from './dtos/user-login.dto';
import { PasswordHasher } from 'src/application/services/password-hasher';
import { TokenProvider } from 'src/application/services/token-provider';

export class UserLoginUseCase {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly userRepository: UserRepository,
    private readonly passwordHasher: PasswordHasher,
    private readonly tokenProvider: TokenProvider,
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

    const user = await this.userRepository.findById(account.userId);
    const accessToken = await this.tokenProvider.createAccessToken({
      userId: account.userId,
    });

    const refreshToken = await this.tokenProvider.createRefreshToken({
      userId: account.userId,
    });

    return {
      user,
      accessToken,
      refreshToken,
    };
  }
}
