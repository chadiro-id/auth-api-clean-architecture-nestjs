import { UserRepository } from 'src/domain/repositories/user.repository';

export class GetUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(identifier: string) {
    const user = await this.userRepository.findById(identifier);
    if (user === null) {
      throw new Error('User not found');
    }

    return user;
  }
}
