import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationsModule } from './presentation/http/api/authentications/authentications.module';
import { UsersModule } from './presentation/http/api/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthenticationsModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
