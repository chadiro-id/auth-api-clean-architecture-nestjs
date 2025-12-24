import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { LoginUserUseCase } from 'src/application/use-cases/login-user.usecase';
import { LoginRequestDto } from './auth.dto';

@Controller('authentications')
export class AuthController {
  constructor(private readonly loginUseCase: LoginUserUseCase) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async login(@Body() dto: LoginRequestDto) {
    const data = await this.loginUseCase.execute(dto);
    return { data };
  }
}
