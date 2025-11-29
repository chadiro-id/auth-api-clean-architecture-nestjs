import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './presentation/http/api/auth/auth.module';
import { UsersModule } from './presentation/http/api/users/users.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
