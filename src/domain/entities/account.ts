export enum Status {
  ACTIVE,
  PENDING,
  SUSPENDED,
  DELETED,
}

export class Account {
  constructor(
    public readonly id: string,
    public readonly status: Status,
    public readonly isDelete: boolean,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly deletedAt: Date,
  ) {}
}
