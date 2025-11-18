export enum ProviderType {
  EMAIL,
  GOOGLE,
}

export class AccountProvider {
  constructor(
    public readonly accountId: string,
    public readonly providerType: ProviderType,
    public readonly providerId: string,
    public readonly credentials: string | null | undefined,
    public readonly createdAt: Date,
  ) {}
}
