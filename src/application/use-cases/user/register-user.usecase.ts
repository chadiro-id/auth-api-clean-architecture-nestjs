import { AccountRepository } from 'src/domain/repositories/account.repository';
import { IdentityRepository } from 'src/domain/repositories/identity.repository';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { RegisterUserDto } from './dtos/register-user.dto';
import { PasswordHashingService } from 'src/application/services/password-hashing.service';
import { UniqueIdService } from 'src/application/services/unique-id.service';
import { User } from 'src/domain/entities/user';
import { Account } from 'src/domain/entities/account';
import { Identity } from 'src/domain/entities/identity';

export class RegisterUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly accountRepository: AccountRepository,
    private readonly identityRepository: IdentityRepository,
    private readonly passwordHashingService: PasswordHashingService,
    private readonly uniqueIdService: UniqueIdService,
  ) {}

  async execute(dto: RegisterUserDto) {
    const isIdentityExists = await this.identityRepository.existsByEmail(
      dto.email,
    );

    if (isIdentityExists) {
      throw new Error('User already exists');
    }

    const userId = this.uniqueIdService.generate();
    const accountId = this.uniqueIdService.generate();
    const hashedPassword = await this.passwordHashingService.hash(dto.password);
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

    await this.userRepository.save(user, account, identity);
  }
}
