import { PasswordHasher } from 'src/application/services/password-hasher';
import * as bcrypt from 'bcryptjs';

export class BcryptPasswordHash implements PasswordHasher {
  private readonly saltRounds = 10;

  hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

  comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
}
