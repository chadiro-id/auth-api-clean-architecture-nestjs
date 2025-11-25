import { Module } from '@nestjs/common';
import { RepositoryModule } from '../repository/repository.module';
import { UserLoginUseCaseProvider } from './authentications.usecase.provider';

@Module({
  imports: [RepositoryModule],
  providers: [UserLoginUseCaseProvider],
  exports: [UserLoginUseCaseProvider],
})
export class AuthenticationsUseCaseModule {}
