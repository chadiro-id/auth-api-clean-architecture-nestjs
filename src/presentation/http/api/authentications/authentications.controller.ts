import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { UserLoginUseCase } from 'src/application/use-cases/authentication/user-login.usecase';
import { USER_LOGIN_USE_CASE_KEY } from 'src/infrastructure/usecase/authentications.usecase.provider';
import { LoginRequestDto } from './authentications.dto';

@Controller('authentications')
export class AuthenticationsController {
  constructor(
    @Inject(USER_LOGIN_USE_CASE_KEY)
    private readonly userLoginUseCase: UserLoginUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async login(@Body() dto: LoginRequestDto) {
    const data = await this.userLoginUseCase.execute(dto);
    return { data };
  }
}
