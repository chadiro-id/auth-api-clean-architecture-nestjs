import { UserRepository } from 'src/domain/repositories/user.repository';
import { RegisterUserDto } from './dtos/register-user.dto';
import { PasswordHasher } from 'src/application/security/password-hasher';
import { IdGenerator } from 'src/application/commons/id-generator';
import { User } from 'src/domain/entities/user';

export class RegisterUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordHasher: PasswordHasher,
    private readonly idGenerator: IdGenerator,
  ) {}

  async execute(dto: RegisterUserDto) {
    const isExistsByUsername = await this.userRepository.existsByUsername(
      dto.email,
    );

    if (isExistsByUsername) {
      throw new Error('username not available');
    }

    const isExistsByEmail = await this.userRepository.existsByEmail(dto.email);

    if (isExistsByEmail) {
      throw new Error('already exist');
    }

    const id = this.idGenerator.generate();
    const hashedPassword = await this.passwordHasher.hashPassword(dto.password);
    const date = new Date();

    const user = new User(
      id,
      dto.username,
      hashedPassword,
      dto.email,
      dto.fullname,
      date,
      date,
    );

    await this.userRepository.save(user);
    return {
      id,
      username: dto.username,
      email: dto.email,
      fullname: dto.fullname,
    };
  }
}
