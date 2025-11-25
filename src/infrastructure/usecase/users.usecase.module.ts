import { Module } from '@nestjs/common';
import { RepositoryModule } from '../repository/repository.module';
import { ServiceModule } from '../service/service.module';
import { RegisterUserUseCaseProvider } from './users.usecase.provider';

@Module({
  imports: [RepositoryModule, ServiceModule],
  providers: [RegisterUserUseCaseProvider],
  exports: [RegisterUserUseCaseProvider],
})
export class UsersUseCaseModule {}
