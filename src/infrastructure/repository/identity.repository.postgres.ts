import { Pool } from 'pg';
import { Identity } from 'src/domain/entities/identity';
import { IdentityRepository } from 'src/domain/repositories/identity.repository';

export class IdentityRepositoryPostgres implements IdentityRepository {
  constructor(private readonly pool: Pool) {}

  save(identity: Identity): Promise<void> {
    console.log(identity);
    throw new Error('Method not implemented.');
  }

  findAllByAccountId(accountId: string): Promise<Identity[]> {
    console.log(accountId);
    throw new Error('Method not implemented.');
  }

  existsByEmail(email: string): Promise<boolean> {
    console.log(email);
    throw new Error('Method not implemented.');
  }

  findByEmail(email: string): Promise<Identity | null> {
    console.log(email);
    throw new Error('Method not implemented.');
  }
}
