export enum Status {
  ACTIVE,
  PENDING,
  SUSPENDED,
  DELETED,
}

export class Account {
  public readonly id: string;
  public readonly status: Status;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
  public readonly deletedAt: Date;

  constructor(
    id: string,
    status: Status,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
  ) {
    this.id = id;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }
}
