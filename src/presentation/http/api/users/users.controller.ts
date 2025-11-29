import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  UseGuards,
} from '@nestjs/common';
import { RegisterUserUseCase } from 'src/application/use-cases/user/register-user.usecase';
import { RegisterRequestDto } from './users.dto';
import { REGISTER_USER_USE_CASE_TOKEN } from './users.provider';
import { AuthGuard } from '../auth/guards/auth.guard';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(REGISTER_USER_USE_CASE_TOKEN)
    private readonly registerUserUseCase: RegisterUserUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() dto: RegisterRequestDto) {
    const result = await this.registerUserUseCase.execute(dto);
    return {
      data: result,
    };
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async profile() {
    console.log('profile');
    return { a: 'a' };
  }
}
