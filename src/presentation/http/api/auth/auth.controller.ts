import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { UserLoginUseCase } from 'src/application/use-cases/login-user.usecase';
import { LoginRequestDto } from './auth.dto';
import { USER_LOGIN_USE_CASE_TOKEN } from './auth.provider';

@Controller('authentications')
export class AuthController {
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
