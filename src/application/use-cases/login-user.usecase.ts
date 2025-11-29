import { UserRepository } from 'src/domain/repositories/user.repository';
import { UserLoginDto } from '../dtos/login-user.dto';
import { PasswordHasher } from 'src/application/security/password-hasher';
import { AuthTokenManager } from 'src/application/security/auth-token-manager';
import { AuthenticationRepository } from 'src/domain/repositories/authentication.repository';
import { Authentication } from 'src/domain/entities/authentication';
import { IdGenerator } from 'src/application/commons/id-generator';

export class LoginUserUseCase {
  constructor(
    private readonly authenticationRepository: AuthenticationRepository,
    private readonly userRepository: UserRepository,
    private readonly passwordHasher: PasswordHasher,
    private readonly tokenManager: AuthTokenManager,
    private readonly idGenerator: IdGenerator,
  ) {}

  async execute(dto: UserLoginDto) {
    const user = await this.userRepository.findByUsernameOrEmail(
      dto.identifier,
    );
    if (user === null) {
      throw new Error('Invalid credentials');
    }

    const isMatch = await this.passwordHasher.comparePassword(
      dto.password,
      user.password,
    );
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    const accessToken = await this.tokenManager.createAccessToken({
      userId: user.id,
    });
    const refreshToken = await this.tokenManager.createRefreshToken({
      userId: user.id,
    });

    const id = this.idGenerator.generate();
    const date = new Date();
    const expiryDate = new Date(date);
    expiryDate.setDate(date.getDate() + 7);

    const authentication = new Authentication(
      id,
      user.id,
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
