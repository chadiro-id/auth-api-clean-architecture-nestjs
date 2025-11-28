import { Email } from '../value-objects/email.vo';

export class UserEmail {
  constructor(
    public readonly id: string,
    private email: Email,
    private isPrimary: boolean,
    private isVerified: boolean,
    public readonly createdAt: Date,
  ) {}

  // Behavior methods
  markAsPrimary(): void {
    this.isPrimary = true;
  }

  markAsVerified(): void {
    this.isVerified = true;
  }

  changeEmail(newEmail: Email): void {
    this.email = newEmail;
    this.isVerified = false; // Reset verification ketika ganti email
  }

  getEmail(): Email {
    return this.email;
  }

  isPrimaryEmail(): boolean {
    return this.isPrimary;
  }

  isVerifiedEmail(): boolean {
    return this.isVerified;
  }
}
