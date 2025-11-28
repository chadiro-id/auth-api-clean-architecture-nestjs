/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { User } from 'src/domain/entities/user';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { PG_POOL_KEY } from '../database/postgres/pg-pool.provider';

@Injectable()
export class UserRepositoryPostgres implements UserRepository {
  constructor(@Inject(PG_POOL_KEY) private readonly pool: Pool) {}

  async save(user: User): Promise<void> {
    const query = {
      text: 'INSERT INTO users VALUES ($1, $2, $3, $4, $5, $6, $7)',
      values: [
        user.id,
        user.username,
        user.password,
        user.email,
        user.fullname,
        user.createdAt,
        user.updatedAt,
      ],
    };

    await this.pool.query(query);
  }

  async findById(id: string): Promise<User | null> {
    const query = {
      text: 'SELECT * FROM users WHERE id = $1',
      values: [id],
    };

    const result = await this.pool.query(query);
    if (result.rows.length === 0) {
      return null;
    }
    const row = result.rows[0];

    return new User(
      row.id,
      row.username,
      row.password,
      row.email,
      row.fullname,
      row.created_at,
      row.updated_at,
    );
  }

  async findByUsername(username: string): Promise<User | null> {
    const query = {
      text: 'SELECT * FROM users WHERE username = $1',
      values: [username],
    };

    const result = await this.pool.query(query);
    if (result.rows.length === 0) {
      return null;
    }
    const row = result.rows[0];

    return new User(
      row.id,
      row.username,
      row.password,
      row.email,
      row.fullname,
      row.created_at,
      row.updated_at,
    );
  }

  async findByEmail(email: string): Promise<User | null> {
    const query = {
      text: 'SELECT * FROM users WHERE email = $1',
      values: [email],
    };

    const result = await this.pool.query(query);
    if (result.rows.length === 0) {
      return null;
    }
    const row = result.rows[0];

    return new User(
      row.id,
      row.username,
      row.password,
      row.email,
      row.fullname,
      row.created_at,
      row.updated_at,
    );
  }

  async existsByUsername(username: string): Promise<boolean> {
    const query = {
      text: 'SELECT id FROM users WHERE username = $1',
      values: [username],
    };

    const result = await this.pool.query(query);
    return result.rows.length > 0;
  }

  async existsByEmail(email: string): Promise<boolean> {
    const query = {
      text: 'SELECT id FROM users WHERE email = $1',
      values: [email],
    };

    const result = await this.pool.query(query);
    return result.rows.length > 0;
  }
}
