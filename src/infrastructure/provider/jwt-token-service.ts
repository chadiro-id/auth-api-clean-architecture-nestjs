import {
  AuthTokenService,
  TokenPayload,
} from 'src/application/services/auth-token-service';
import * as jwt from 'jsonwebtoken';

export class JwtTokenService implements AuthTokenService {
  constructor() {}

  createAccessToken(payload: TokenPayload): Promise<string> {
    console.log(payload);
    throw new Error('Method not implemented.');
  }
  createRefreshToken(payload: TokenPayload): Promise<string> {
    console.log(payload);
    throw new Error('Method not implemented.');
  }
  verifyRefreshToken(token: string): Promise<TokenPayload | null> {
    console.log(token);
    throw new Error('Method not implemented.');
  }
  decodeToken(token: string): TokenPayload | null {
    const decoded = jwt.decode(token) as jwt.JwtPayload;
    return {
      userId: decoded.sub || '',
    };
  }
}
