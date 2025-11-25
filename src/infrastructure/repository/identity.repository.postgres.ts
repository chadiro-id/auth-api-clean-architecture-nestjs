import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { Identity } from 'src/domain/entities/identity';
import { IdentityRepository } from 'src/domain/repositories/identity.repository';
import { PG_POOL_KEY } from '../database/postgres/pg-pool.provider';

@Injectable()
export class IdentityRepositoryPostgres implements IdentityRepository {
  constructor(@Inject(PG_POOL_KEY) private readonly pool: Pool) {}

  save(identity: Identity): Promise<void> {
    console.log(identity);
    throw new Error('Method not implemented.');
  }

  findAllByAccountId(accountId: string): Promise<Identity[]> {
    console.log(accountId);
    throw new Error('Method not implemented.');
  }

  async existsByEmail(email: string): Promise<boolean> {
    const query = {
      text: 'SELECT id FROM identities WHERE provider_type = $1 AND provider_id = $2',
      values: ['EMAIL', email],
    };

    const result = await this.pool.query(query);
    return result.rows.length > 0;
  }

  findByEmail(email: string): Promise<Identity | null> {
    console.log(email);
    throw new Error('Method not implemented.');
  }
}
