import { RegisterUserUseCase } from 'src/application/use-cases/user/register-user.usecase';
import { IdentityRepositoryPostgres } from '../repository/identity.repository.postgres';
import { UserRepositoryPostgres } from '../repository/user.repository.postgres';
import { BcryptPasswordHash } from '../service/bcrypt-password-hash';
import { NanoidGenerator } from '../service/nanoid-generator';

export const REGISTER_USER_USE_CASE_KEY = 'REGISTER_USER_USE_CASE';
export const RegisterUserUseCaseProvider = {
  provide: REGISTER_USER_USE_CASE_KEY,
  useFactory: (
    userRepository: UserRepositoryPostgres,
    identityRepository: IdentityRepositoryPostgres,
    passwordHasher: BcryptPasswordHash,
    idGenerator: NanoidGenerator,
  ) => {
    return new RegisterUserUseCase(
      userRepository,
      identityRepository,
      passwordHasher,
      idGenerator,
    );
  },
  inject: [
    UserRepositoryPostgres,
    IdentityRepositoryPostgres,
    BcryptPasswordHash,
    NanoidGenerator,
  ],
};
