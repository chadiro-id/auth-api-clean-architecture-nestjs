export enum ContactType {
  EMAIL,
  PHONE_NUMBER,
}

export class AccountContact {
  constructor(
    public readonly accountId: string,
    public readonly contactType: ContactType,
    public readonly contactValue: string,
    public readonly isPrimary: boolean,
    public readonly verifiedAt: Date | null,
    public readonly createdAt: Date,
  ) {}
}
