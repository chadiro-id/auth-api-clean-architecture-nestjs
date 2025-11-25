import { UserLoginUseCase } from 'src/application/use-cases/authentication/user-login.usecase';
import { AccountRepositoryPostgres } from '../repository/account.repository.postgres';
import { AuthenticationRepositoryPostgres } from '../repository/authentication.repository.postgres';
import { UserRepositoryPostgres } from '../repository/user.repository.postgres';
import { BcryptPasswordHash } from '../service/bcrypt-password-hash';
import { JwtTokenService } from '../service/jwt-token-service';

export const USER_LOGIN_USE_CASE_KEY = 'USER_LOGIN_USE_CASE';
export const UserLoginUseCaseProvider = {
  provide: USER_LOGIN_USE_CASE_KEY,
  useFactory: (
    accountRepository: AccountRepositoryPostgres,
    authenticationRepository: AuthenticationRepositoryPostgres,
    userRepository: UserRepositoryPostgres,
    passwordHasher: BcryptPasswordHash,
    authTokenService: JwtTokenService,
  ) => {
    return new UserLoginUseCase(
      authenticationRepository,
      accountRepository,
      userRepository,
      passwordHasher,
      authTokenService,
    );
  },
  inject: [
    AuthenticationRepositoryPostgres,
    AccountRepositoryPostgres,
    UserRepositoryPostgres,
    BcryptPasswordHash,
    JwtTokenService,
  ],
};
