export interface PasswordHashProvider {
  hashPassword(password: string): Promise<string>;
  comparePassword(password: string): Promise<boolean>;
}
