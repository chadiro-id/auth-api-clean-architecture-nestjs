import { AuthTokenManager } from 'src/application/security/auth-token-manager';
import { IdGenerator } from 'src/application/commons/id-generator';
import { PasswordHasher } from 'src/application/security/password-hasher';
import { LoginUserUseCase } from 'src/application/use-cases/login-user.usecase';
import { AuthenticationRepository } from 'src/domain/repositories/authentication.repository';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { AuthenticationRepositoryPostgres } from 'src/infrastructure/repository/authentication.repository.postgres';
import { UserRepositoryPostgres } from 'src/infrastructure/repository/user.repository.postgres';
import { BcryptPasswordHash } from 'src/infrastructure/service/bcrypt-password-hash';
import { JwtTokenManager } from 'src/infrastructure/service/jwt-token-manager';
import { NanoidGenerator } from 'src/infrastructure/service/nanoid-generator';

export const LoginUseCaseProvider = {
  provide: LoginUserUseCase,
  useFactory: (
    authenticationRepository: AuthenticationRepository,
    userRepository: UserRepository,
    passwordHasher: PasswordHasher,
    tokenManager: AuthTokenManager,
    idGenerator: IdGenerator,
  ) => {
    return new LoginUserUseCase(
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
    JwtTokenManager,
    NanoidGenerator,
  ],
};
