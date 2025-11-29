import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { UserLoginUseCase } from 'src/application/use-cases/auth/user-login.usecase';
import { LoginRequestDto } from './authentications.dto';
import { USER_LOGIN_USE_CASE_TOKEN } from './authentications.provider';

@Controller('authentications')
export class AuthenticationsController {
  constructor(
    @Inject(USER_LOGIN_USE_CASE_TOKEN)
    private readonly userLoginUseCase: UserLoginUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async login(@Body() dto: LoginRequestDto) {
    const data = await this.userLoginUseCase.execute(dto);
    return { data };
  }
}
