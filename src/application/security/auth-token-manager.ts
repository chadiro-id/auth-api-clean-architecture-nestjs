export type TokenPayload = {
  userId: string;
};

export interface AuthTokenManager {
  createAccessToken(payload: TokenPayload): Promise<string>;
  createRefreshToken(payload: TokenPayload): Promise<string>;
  verifyAccessToken(token: string): Promise<TokenPayload | null>;
  verifyRefreshToken(token: string): Promise<TokenPayload | null>;
  decodeToken(token: string): TokenPayload | null;
}
