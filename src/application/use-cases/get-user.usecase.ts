import { UserRepository } from 'src/domain/repositories/user.repository';

export class GetUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string) {
    const user = await this.userRepository.findById(id);
    if (user === null) {
      throw new Error('User not found');
    }

    return user;
  }
}
