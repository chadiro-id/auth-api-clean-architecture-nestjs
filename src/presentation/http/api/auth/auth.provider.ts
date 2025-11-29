import { AuthTokenManager } from 'src/application/security/auth-token-manager';
import { IdGenerator } from 'src/application/commons/id-generator';
import { PasswordHasher } from 'src/application/security/password-hasher';
import { UserLoginUseCase } from 'src/application/use-cases/user-login.usecase';
import { AuthenticationRepository } from 'src/domain/repositories/authentication.repository';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { AuthenticationRepositoryPostgres } from 'src/infrastructure/repository/authentication.repository.postgres';
import { UserRepositoryPostgres } from 'src/infrastructure/repository/user.repository.postgres';
import { BcryptPasswordHash } from 'src/infrastructure/service/bcrypt-password-hash';
import { JwtTokenService } from 'src/infrastructure/service/jwt-token-service';
import { NanoidGenerator } from 'src/infrastructure/service/nanoid-generator';

export const USER_LOGIN_USE_CASE_TOKEN = Symbol('USER_LOGIN_USE_CASE');
export const UserLoginUseCaseProvider = {
  provide: USER_LOGIN_USE_CASE_TOKEN,
  useFactory: (
    authenticationRepository: AuthenticationRepository,
    userRepository: UserRepository,
    passwordHasher: PasswordHasher,
    tokenManager: AuthTokenManager,
    idGenerator: IdGenerator,
  ) => {
    return new UserLoginUseCase(
      authenticationRepository,
      userRepository,
      passwordHasher,
      tokenManager,
      idGenerator,
    );
  },
  inject: [
    AuthenticationRepositoryPostgres,
    UserRepositoryPostgres,
    BcryptPasswordHash,
    JwtTokenService,
    NanoidGenerator,
  ],
};
