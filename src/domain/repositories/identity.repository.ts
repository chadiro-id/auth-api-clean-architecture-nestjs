import { Identity } from '../entities/identity';

export interface IdentityRepository {
  save(identity: Identity): Promise<void>;
  findAllByAccountId(accountId: string): Promise<Identity[]>;
  existsByEmail(email: string): Promise<boolean>;
  findByEmail(email: string): Promise<Identity | null>;
}
