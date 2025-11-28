import { Module } from '@nestjs/common';
import { AuthenticationsController } from './authentications.controller';
import { RepositoryModule } from 'src/infrastructure/repository/repository.module';
import { ServiceModule } from 'src/infrastructure/service/service.module';
import { UserLoginUseCaseProvider } from './authentications.provider';

@Module({
  imports: [RepositoryModule, ServiceModule],
  providers: [UserLoginUseCaseProvider],
  controllers: [AuthenticationsController],
})
export class AuthenticationsModule {}
