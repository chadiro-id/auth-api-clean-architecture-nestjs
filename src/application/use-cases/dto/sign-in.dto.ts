export interface SignInDto {
  email: string;
  password: string;
}

export interface SignedInDto {
  accessToken: string;
  refreshToken: string;
}
