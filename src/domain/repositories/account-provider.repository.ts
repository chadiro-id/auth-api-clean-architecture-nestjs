import { Identity } from '../entities/identity';

export interface AccountProviderRepository {
  save(identity: Identity): Promise<void>;
  findAllByAccountId(accountId: string): Promise<Identity[]>;
  existsByEmail(email: string): Promise<boolean>;
  findByEmail(email: string): Promise<Identity | null>;
}
