import { FactoryProvider } from '@nestjs/common';
import { IdGenerator } from 'src/application/commons/id-generator';
import { PasswordHasher } from 'src/application/services/password-hasher';
import { RegisterUserUseCase } from 'src/application/use-cases/user/register-user.usecase';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { UserRepositoryPostgres } from 'src/infrastructure/repository/user.repository.postgres';
import { BcryptPasswordHash } from 'src/infrastructure/service/bcrypt-password-hash';
import { NanoidGenerator } from 'src/infrastructure/service/nanoid-generator';

export const REGISTER_USER_USE_CASE_TOKEN = Symbol('REGISTER_USER_USE_CASE');
export const RegisterUserUseCaseProvider: FactoryProvider = {
  provide: REGISTER_USER_USE_CASE_TOKEN,
  inject: [UserRepositoryPostgres, BcryptPasswordHash, NanoidGenerator],
  useFactory: (
    userRepository: UserRepository,
    passwordHasher: PasswordHasher,
    idGenerator: IdGenerator,
  ) => {
    return new RegisterUserUseCase(userRepository, passwordHasher, idGenerator);
  },
};
