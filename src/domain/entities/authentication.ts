export class Authentication {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly token: string,
    public readonly expiryDate: Date,
    public readonly createdAt: Date,
  ) {}
}
