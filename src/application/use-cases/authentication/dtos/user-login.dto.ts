export interface UserLoginDto {
  type: 'USERNAME' | 'EMAIL';
  identifier: string;
  password: string;
}
