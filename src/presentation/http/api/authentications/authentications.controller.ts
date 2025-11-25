import { Controller, Post } from '@nestjs/common';
import { UserLoginUseCase } from 'src/application/use-cases/authentication/user-login.usecase';

@Controller('authentications')
export class AuthenticationsController {
  constructor(private readonly userLoginUseCase: UserLoginUseCase) {}

  @Post()
  async login() {}
}
