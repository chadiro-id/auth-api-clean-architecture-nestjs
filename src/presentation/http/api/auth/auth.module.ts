import { Module } from '@nestjs/common';
import { AuthenticationsController } from './auth.controller';
import { RepositoryModule } from 'src/infrastructure/repository/repository.module';
import { ServiceModule } from 'src/infrastructure/service/service.module';
import { UserLoginUseCaseProvider } from './auth.provider';

@Module({
  imports: [RepositoryModule, ServiceModule],
  providers: [UserLoginUseCaseProvider],
  controllers: [AuthenticationsController],
})
export class AuthModule {}
