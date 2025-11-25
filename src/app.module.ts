import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationsModule } from './presentation/http/api/authentications/authentications.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthenticationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
