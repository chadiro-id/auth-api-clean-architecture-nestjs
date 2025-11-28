export class User {
  constructor(
    public readonly id: string,
    public username: string | null,
    public password: string | null,
    public email: string | null,
    public fullname: string,
    public readonly createdAt: Date,
    public updatedAt: Date,
  ) {}
}
