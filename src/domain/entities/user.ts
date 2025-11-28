import { UserEmail } from './user-email.entity';
import { Email } from '../value-objects/email.vo';

export class User {
  private emails: UserEmail[] = [];

  constructor(
    public readonly id: string,
    public username: string | null,
    public password: string | null,
    public fullname: string,
    public readonly createdAt: Date,
    public updatedAt: Date,
  ) {}

  // Core Business Logic
  addEmail(userEmail: UserEmail): void {
    // Validation: Email must be unique
    if (this.hasEmail(userEmail.getEmail())) {
      throw new Error('Duplicate email: ' + userEmail.getEmail().toString());
    }

    // If setting as primary, demote existing primary
    if (userEmail.isPrimaryEmail()) {
      this.demoteExistingPrimary();
    }

    this.emails.push(userEmail);
  }

  removeEmail(emailId: string): void {
    const emailToRemove = this.emails.find((e) => e.id === emailId);
    if (!emailToRemove) {
      throw new Error('Not found' + emailId.toString());
    }

    // Cannot remove primary email if it's the only one
    if (emailToRemove.isPrimaryEmail() && this.emails.length === 1) {
      throw new Error('Cannot remove primary email');
    }

    this.emails = this.emails.filter((e) => e.id !== emailId);

    // If we removed primary, assign new primary
    if (emailToRemove.isPrimaryEmail()) {
      this.assignNewPrimary();
    }
  }

  setPrimaryEmail(emailId: string): void {
    const targetEmail = this.emails.find((e) => e.id === emailId);
    if (!targetEmail) {
      throw new Error('email not found' + emailId.toString());
    }

    if (!targetEmail.isVerifiedEmail()) {
      throw new Error('Unverified email can not be primary');
    }

    this.demoteExistingPrimary();
    targetEmail.markAsPrimary();
  }

  verifyEmail(emailId: string): void {
    const email = this.emails.find((e) => e.id === emailId);
    if (!email) {
      throw new Error('Not found' + emailId.toString());
    }

    email.markAsVerified();
  }

  // Query Methods
  getPrimaryEmail(): Email {
    const primary = this.emails.find((e) => e.isPrimaryEmail());
    if (!primary) {
      throw new Error('No primary email');
    }
    return primary.getEmail();
  }

  getEmails(): ReadonlyArray<UserEmail> {
    return [...this.emails]; // Return copy untuk maintain encapsulation
  }

  hasEmail(email: Email): boolean {
    return this.emails.some((e) => e.getEmail().equals(email));
  }

  // Private helper methods
  private demoteExistingPrimary(): void {
    const existingPrimary = this.emails.find((e) => e.isPrimaryEmail());
    if (existingPrimary) {
      // Since isPrimary is private, we need to handle this differently
      // Alternatively, we could add a demote() method to UserEmail
      this.emails = this.emails.map((e) =>
        e.isPrimaryEmail()
          ? new UserEmail(
              e.id,
              e.getEmail(),
              false,
              e.isVerifiedEmail(),
              e['createdAt'],
            )
          : e,
      );
    }
  }

  private assignNewPrimary(): void {
    const verifiedEmails = this.emails.filter((e) => e.isVerifiedEmail());
    if (verifiedEmails.length > 0) {
      // Set the first verified email as primary
      this.emails = this.emails.map((e, index) =>
        index === 0
          ? new UserEmail(
              e.id,
              e.getEmail(),
              true,
              e.isVerifiedEmail(),
              e['createdAt'],
            )
          : e,
      );
    }
  }
}
