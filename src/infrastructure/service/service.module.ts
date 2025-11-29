import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import jwtConfig from '../config/jwt.config';
import { BcryptPasswordHash } from './bcrypt-password-hash';
import { JwtTokenManager } from './jwt-token-manager';
import { NanoidGenerator } from './nanoid-generator';

@Module({
  imports: [ConfigModule.forFeature(jwtConfig)],
  providers: [BcryptPasswordHash, JwtTokenManager, NanoidGenerator],
  exports: [BcryptPasswordHash, JwtTokenManager, NanoidGenerator],
})
export class ServiceModule {}
