export class Authentication {
  constructor(
    public readonly accountId: string,
    public readonly token: string,
    public readonly expiresAt: Date,
    public readonly createdAt: Date,
  ) {}
}
