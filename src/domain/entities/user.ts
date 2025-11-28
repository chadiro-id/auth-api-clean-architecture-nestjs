export class User {
  constructor(
    public readonly id: string,
    public username: string,
    public password: string,
    public email: string,
    public fullname: string,
    public readonly createdAt: Date,
    public updatedAt: Date,
  ) {}
}
