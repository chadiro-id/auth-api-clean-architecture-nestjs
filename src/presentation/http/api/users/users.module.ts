import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { RepositoryModule } from 'src/infrastructure/repository/repository.module';
import { ServiceModule } from 'src/infrastructure/service/service.module';
import { RegisterUserUseCaseProvider } from './users.provider';

@Module({
  imports: [RepositoryModule, ServiceModule],
  providers: [RegisterUserUseCaseProvider],
  controllers: [UsersController],
})
export class UsersModule {}
