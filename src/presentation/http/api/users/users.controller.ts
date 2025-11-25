import { Controller, Inject, Post } from '@nestjs/common';
import { RegisterUserUseCase } from 'src/application/use-cases/user/register-user.usecase';
import { REGISTER_USER_USE_CASE_KEY } from 'src/infrastructure/usecase/users.usecase.provider';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(REGISTER_USER_USE_CASE_KEY)
    private readonly registerUserUseCase: RegisterUserUseCase,
  ) {}

  @Post()
  async handlePostUser() {}
}
