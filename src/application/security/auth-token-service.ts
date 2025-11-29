export type TokenPayload = {
  userId: string;
};

export interface AuthTokenService {
  createAccessToken(payload: TokenPayload): Promise<string>;
  createRefreshToken(payload: TokenPayload): Promise<string>;
  verifyRefreshToken(token: string): Promise<TokenPayload | null>;
  decodeToken(token: string): TokenPayload | null;
}
