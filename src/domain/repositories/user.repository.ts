import { Account } from '../entities/account';
import { Identity } from '../entities/identity';
import { User } from '../entities/user';

export interface UserRepository {
  saveAggregate(
    user: User,
    account: Account,
    identity: Identity,
  ): Promise<void>;

  findById(id: string): Promise<User | null>;
}
