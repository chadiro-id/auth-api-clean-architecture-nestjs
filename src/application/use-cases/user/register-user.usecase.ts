import { AccountRepository } from 'src/domain/repositories/account.repository';
import { IdentityRepository } from 'src/domain/repositories/identity.repository';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { RegisterUserDto } from './dtos/register-user.dto';
import { PasswordHasher } from 'src/application/services/password-hasher';
import { IdGenerator } from 'src/application/services/id-generator';
import { User } from 'src/domain/entities/user';
import { Account } from 'src/domain/entities/account';
import { Identity } from 'src/domain/entities/identity';

export class RegisterUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly accountRepository: AccountRepository,
    private readonly identityRepository: IdentityRepository,
    private readonly passwordHasher: PasswordHasher,
    private readonly idGenerator: IdGenerator,
  ) {}

  async execute(dto: RegisterUserDto) {
    const isIdentityExists = await this.identityRepository.existsByEmail(
      dto.email,
    );

    if (isIdentityExists) {
      throw new Error('User already exists');
    }

    const userId = this.idGenerator.generate();
    const accountId = this.idGenerator.generate();
    const hashedPassword = await this.passwordHasher.hash(dto.password);
    const date = new Date();

    const user = new User(userId, dto.fullname, dto.fullname);
    const account = new Account(
      accountId,
      userId,
      hashedPassword,
      'ACTIVE',
      false,
      date,
    );
    const identity = new Identity(accountId, 'EMAIL', dto.email, date);

    await this.userRepository.saveAggregate(user, account, identity);
    return {
      id: userId,
      email: dto.email,
      fullname: dto.fullname,
    };
  }
}
