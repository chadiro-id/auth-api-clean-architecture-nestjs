export interface AuthTokenService {
  createAccessToken(payload: { userId: string }): Promise<string>;
  createRefreshToken(payload: { userId: string }): Promise<string>;
  verifyRefreshToken(token: string): Promise<string>;
  decodeToken(token: string): string | null;
}
