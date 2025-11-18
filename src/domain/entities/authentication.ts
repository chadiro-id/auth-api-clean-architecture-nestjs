export class Authentication {
  public readonly id: string;
  public readonly accountId: string;
  public readonly token: string;
  public readonly expiresAt: Date;
  public readonly createdAt: Date;

  constructor(
    id: string,
    accountId: string,
    token: string,
    expiresAt: Date,
    createdAt: Date,
  ) {
    this.id = id;
    this.accountId = accountId;
    this.token = token;
    this.expiresAt = expiresAt;
    this.createdAt = createdAt;
  }
}
