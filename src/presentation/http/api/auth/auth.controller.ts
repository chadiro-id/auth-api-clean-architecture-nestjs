import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { LoginUserUseCase } from 'src/application/use-cases/login-user.usecase';
import { LoginRequestDto } from './auth.dto';
import { LOGIN_USE_CASE_TOKEN } from './auth.provider';

@Controller('authentications')
export class AuthController {
  constructor(
    @Inject(LOGIN_USE_CASE_TOKEN)
    private readonly loginUseCase: LoginUserUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async login(@Body() dto: LoginRequestDto) {
    const data = await this.loginUseCase.execute(dto);
    return { data };
  }
}
