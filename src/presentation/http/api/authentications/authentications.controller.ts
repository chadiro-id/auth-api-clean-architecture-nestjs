import { Controller, Inject, Post } from '@nestjs/common';
import { UserLoginUseCase } from 'src/application/use-cases/authentication/user-login.usecase';
import { USER_LOGIN_USE_CASE_KEY } from 'src/infrastructure/usecase/authentications.usecase.provider';

@Controller('authentications')
export class AuthenticationsController {
  constructor(
    @Inject(USER_LOGIN_USE_CASE_KEY)
    private readonly userLoginUseCase: UserLoginUseCase,
  ) {}

  @Post()
  async login() {}
}
