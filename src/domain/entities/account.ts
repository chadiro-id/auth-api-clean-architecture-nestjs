type Status = 'ACTIVE' | 'SUSPENDED' | 'DELETED';

export class Account {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly password: string | null,
    public readonly status: Status,
    public readonly isDelete: boolean,
    public readonly createdAt: Date,
  ) {}
}
