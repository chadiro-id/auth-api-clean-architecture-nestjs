import { Module } from '@nestjs/common';
import { RepositoryModule } from '../repository/repository.module';
import { UserLoginUseCaseProvider } from './authentications.usecase.provider';
import { ServiceModule } from '../service/service.module';

@Module({
  imports: [RepositoryModule, ServiceModule],
  providers: [UserLoginUseCaseProvider],
  exports: [UserLoginUseCaseProvider],
})
export class AuthenticationsUseCaseModule {}
