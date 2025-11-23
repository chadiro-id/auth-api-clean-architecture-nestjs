import { AccountRepository } from 'src/domain/repositories/account.repository';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { UserLoginDto } from './dtos/user-login.dto';
import { PasswordHasher } from 'src/application/services/password-hasher';
import { AuthTokenService } from 'src/application/services/auth-token-service';
import { AuthenticationRepository } from 'src/domain/repositories/authentication.repository';
import { Authentication } from 'src/domain/entities/authentication';

export class UserLoginUseCase {
  constructor(
    private readonly authenticationRepository: AuthenticationRepository,
    private readonly accountRepository: AccountRepository,
    private readonly userRepository: UserRepository,
    private readonly passwordHasher: PasswordHasher,
    private readonly tokenProvider: AuthTokenService,
  ) {}

  async execute(dto: UserLoginDto) {
    const account = await this.accountRepository.findByProvider(
      dto.type,
      dto.identifier,
    );
    if (account === null) {
      throw new Error('Invalid credentials');
    }

    const isMatch = await this.passwordHasher.comparePassword(
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

    const date = new Date();
    const expiryDate = new Date(date);
    expiryDate.setDate(date.getDate() + 7);

    const authentication = new Authentication(
      account.id,
      refreshToken,
      expiryDate,
      date,
    );
    await this.authenticationRepository.save(authentication);

    return {
      user,
      accessToken,
      refreshToken,
    };
  }
}
