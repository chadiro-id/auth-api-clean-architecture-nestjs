import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { RegisterUserUseCase } from 'src/application/use-cases/register-user.usecase';
import { RegisterRequestDto } from './users.dto';
import { AuthGuard } from '../auth/guards/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly registerUserUseCase: RegisterUserUseCase) {}

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
