type Status = 'ACTIVE' | 'SUSPENDED' | 'DELETED';

export class Account {
  constructor(
    public readonly id: string,
    public readonly status: Status,
    public readonly isDelete: boolean,
    public readonly createdAt: Date,
    public readonly updatedAt: Date | null,
    public readonly deletedAt: Date | null,
  ) {}
}
