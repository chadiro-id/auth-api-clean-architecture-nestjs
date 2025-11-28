import { Entity } from '../base/entity';

export class User extends Entity {
  constructor(
    id: string,
    public username: string | null,
    public email: string,
    public password: string | null,
    public fullname: string,
    createdAt: Date,
    public updatedAt: Date,
  ) {
    super(id, createdAt);
  }
}
