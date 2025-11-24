import {
  AuthTokenService,
  TokenPayload,
} from 'src/application/services/auth-token-service';
import * as jwt from 'jsonwebtoken';
import jwtConfig from '../config/jwt.config';
import type { ConfigType } from '@nestjs/config';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class JwtTokenService implements AuthTokenService {
  constructor(
    @Inject(jwtConfig.KEY)
    private readonly config: ConfigType<typeof jwtConfig>,
  ) {}

  createAccessToken(payload: TokenPayload): Promise<string> {
    console.log(payload);
    throw new Error('Method not implemented.');
  }

  createRefreshToken(payload: TokenPayload): Promise<string> {
    console.log(payload);
    throw new Error('Method not implemented.');
  }

  verifyRefreshToken(token: string): Promise<TokenPayload | null> {
    const secret = this.config.refreshTokenSecret as string;
    return new Promise((resolve, reject) =>
      jwt.verify(token, secret, (error, decoded) => {
        if (error) {
          reject(error);
        }
        resolve(decoded as TokenPayload);
      }),
    );
  }

  decodeToken(token: string): TokenPayload | null {
    try {
      const decoded = jwt.decode(token) as jwt.JwtPayload;
      if (decoded.sub) {
        return { userId: decoded.sub };
      }
      return null;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
