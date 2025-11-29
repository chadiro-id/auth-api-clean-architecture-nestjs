import { UserRepository } from 'src/domain/repositories/user.repository';
import { RegisterUserRequest } from '../dtos/register-user.dto';
import { PasswordHasher } from 'src/application/security/password-hasher';
import { IdGenerator } from 'src/application/commons/id-generator';
import { User } from 'src/domain/entities/user';

export class RegisterUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordHasher: PasswordHasher,
    private readonly idGenerator: IdGenerator,
  ) {}

  async execute(request: RegisterUserRequest) {
    const isExistsByUsername = await this.userRepository.existsByUsername(
      request.email,
    );

    if (isExistsByUsername) {
      throw new Error('username not available');
    }

    const isExistsByEmail = await this.userRepository.existsByEmail(
      request.email,
    );

    if (isExistsByEmail) {
      throw new Error('already exist');
    }

    const id = this.idGenerator.generate();
    const hashedPassword = await this.passwordHasher.hashPassword(
      request.password,
    );
    const date = new Date();

    const user = new User(
      id,
      request.username,
      hashedPassword,
      request.email,
      request.fullname,
      date,
      date,
    );

    await this.userRepository.save(user);
    return {
      id,
      username: request.username,
      email: request.email,
      fullname: request.fullname,
    };
  }
}
