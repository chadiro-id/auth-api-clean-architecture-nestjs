/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { Authentication } from 'src/domain/entities/authentication';
import { AuthenticationRepository } from 'src/domain/repositories/authentication.repository';
import { PG_POOL_KEY } from '../database/postgres/pg-pool.provider';

@Injectable()
export class AuthenticationRepositoryPostgres
  implements AuthenticationRepository
{
  constructor(@Inject(PG_POOL_KEY) private readonly pool: Pool) {}

  async save(authentication: Authentication): Promise<void> {
    const query = {
      text: 'INSERT INTO authentications VALUES ($1, $2, $3, $4, $5)',
      values: [
        authentication.id,
        authentication.userId,
        authentication.token,
        authentication.expiryDate,
        authentication.createdAt,
      ],
    };

    await this.pool.query(query);
  }

  async findByToken(token: string): Promise<Authentication | null> {
    const query = {
      text: 'SELECT * FROM authentications WHERE token = $1',
      values: [token],
    };

    const result = await this.pool.query(query);
    if (result.rows.length === 0) {
      return null;
    }

    const row = result.rows[0];
    return new Authentication(
      row.id,
      row.user_id,
      row.token,
      row.expiry_date,
      row.created_at,
    );
  }
}
