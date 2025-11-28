import { Email } from '../value-objects/email.vo';

export class UserEmail {
  constructor(
    private readonly id: UserEmailId,
    private email: Email,
    private isPrimary: boolean,
    private isVerified: boolean,
    private readonly createdAt: Date,
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

  // Getters
  getId(): UserEmailId {
    return this.id;
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

// Value Object untuk UserEmail ID
export class UserEmailId {
  constructor(private readonly value: string) {}

  equals(other: UserEmailId): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
