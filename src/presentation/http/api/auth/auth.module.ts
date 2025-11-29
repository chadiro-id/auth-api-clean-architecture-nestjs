import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { RepositoryModule } from 'src/infrastructure/repository/repository.module';
import { ServiceModule } from 'src/infrastructure/service/service.module';
import { UserLoginUseCaseProvider } from './auth.provider';

@Module({
  imports: [RepositoryModule, ServiceModule],
  providers: [UserLoginUseCaseProvider],
  controllers: [AuthController],
})
export class AuthModule {}
