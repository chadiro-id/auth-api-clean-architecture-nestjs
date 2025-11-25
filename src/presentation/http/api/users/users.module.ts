import { Module } from '@nestjs/common';
import { UsersUseCaseModule } from 'src/infrastructure/usecase/users.usecase.module';
import { UsersController } from './users.controller';

@Module({
  imports: [UsersUseCaseModule],
  controllers: [UsersController],
})
export class UsersModule {}
