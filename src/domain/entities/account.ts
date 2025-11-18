export class Account {
  public readonly id: string;
  public readonly name: string;
  public readonly isActive: boolean;
  public readonly isDelete: boolean;
  public readonly createdAt: Date;

  constructor(
    id: string,
    name: string,
    isActive: boolean,
    isDelete: boolean,
    createdAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.isActive = isActive;
    this.isDelete = isDelete;
    this.createdAt = createdAt;
  }
}
