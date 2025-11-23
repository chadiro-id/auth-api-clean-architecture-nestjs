export type ProviderType = 'USERNAME' | 'EMAIL' | 'GOOGLE';

export class Identity {
  constructor(
    public readonly userId: string,
    public readonly providerType: ProviderType,
    public readonly providerId: string,
    public readonly createdAt: Date,
  ) {}
}
