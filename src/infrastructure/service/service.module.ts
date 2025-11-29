import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import jwtConfig from '../config/jwt.config';
import { BcryptPasswordHash } from './bcrypt-password-hash';
import { JwtTokenService } from './jwt-token-manager';
import { NanoidGenerator } from './nanoid-generator';

@Module({
  imports: [ConfigModule.forFeature(jwtConfig)],
  providers: [BcryptPasswordHash, JwtTokenService, NanoidGenerator],
  exports: [BcryptPasswordHash, JwtTokenService, NanoidGenerator],
})
export class ServiceModule {}
