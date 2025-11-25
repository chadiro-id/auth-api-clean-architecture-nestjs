import { Pool } from 'pg';
import { Authentication } from 'src/domain/entities/authentication';
import { AuthenticationRepository } from 'src/domain/repositories/authentication.repository';

export class AuthenticationRepositoryPostgres
  implements AuthenticationRepository
{
  constructor(private readonly pool: Pool) {}

  async save(authentication: Authentication): Promise<void> {
    const query = {
      text: 'INSERT INTO authentications (account_id, token, expiry_date, created_at) VALUES ($1, $2, $3, $4)',
      values: [
        authentication.accountId,
        authentication.token,
        authentication.expiresAt,
        authentication.createdAt,
      ],
    };

    await this.pool.query(query);
  }

  async findByToken(token: string): Promise<Authentication | null> {
    console.log(token);
    throw new Error('Method not implemented.');
  }
}
