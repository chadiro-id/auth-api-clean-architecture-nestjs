export class LoginRequestDto {
  type: 'USERNAME' | 'EMAIL';
  identifier: string;
  password: string;
}
