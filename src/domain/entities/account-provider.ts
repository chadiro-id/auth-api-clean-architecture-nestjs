export enum ProviderType {
  EMAIL,
  GOOGLE,
}

export class AccountProvider {
  public readonly id: string;
  public readonly accountId: string;
  public readonly providerType: ProviderType;
  public readonly providerId: string;
  public readonly credentials: string | null | undefined;
  public readonly createdAt: Date;

  constructor(
    id: string,
    accountId: string,
    providerType: ProviderType,
    providerId: string,
    credentials: string | null | undefined,
    createdAt: Date,
  ) {
    this.id = id;
    this.accountId = accountId;
    this.providerType = providerType;
    this.providerId = providerId;
    this.credentials = credentials;
    this.createdAt = createdAt;
  }
}
