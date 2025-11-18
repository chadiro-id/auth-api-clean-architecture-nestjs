export enum ContactType {
  EMAIL,
  PHONE_NUMBER,
}

export class AccountContact {
  public readonly id: string;
  public readonly accountId: string;
  public readonly contactType: ContactType;
  public readonly contactValue: string;
  public readonly isPrimary: boolean;
  public readonly verifiedAt: Date;

  constructor(
    id: string,
    accountId: string,
    contactType: ContactType,
    contactValue: string,
    isPrimary: boolean,
    verifiedAt: Date,
  ) {
    this.id = id;
    this.accountId = accountId;
    this.contactType = contactType;
    this.contactValue = contactValue;
    this.isPrimary = isPrimary;
    this.verifiedAt = verifiedAt;
  }
}
