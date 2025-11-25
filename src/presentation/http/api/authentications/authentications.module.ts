import { Module } from '@nestjs/common';
import { AuthenticationsUseCaseModule } from 'src/infrastructure/usecase/authentications.usecase.module';
import { AuthenticationsController } from './authentications.controller';

@Module({
  imports: [AuthenticationsUseCaseModule],
  controllers: [AuthenticationsController],
})
export class AuthenticationsModule {}
