export interface AuthTokenProvider {
  generateAccessToken(payload: { id: string; email: string }): Promise<string>;
  generateRefreshToken(payload: { id: string; email: string }): Promise<string>;
  verifyRefreshToken(token: string): Promise<boolean>;
  decodeToken(token: string): Promise<{ id: string; email: string }>;
}
