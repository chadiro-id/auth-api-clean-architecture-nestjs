import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { RepositoryModule } from 'src/infrastructure/repository/repository.module';
import { ServiceModule } from 'src/infrastructure/service/service.module';
import { LoginUseCaseProvider } from './auth.provider';

@Module({
  imports: [RepositoryModule, ServiceModule],
  providers: [LoginUseCaseProvider],
  controllers: [AuthController],
})
export class AuthModule {}
