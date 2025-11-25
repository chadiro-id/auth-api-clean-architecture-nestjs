import { Authentication } from '../entities/authentication';

export interface AuthenticationRepository {
  save(authentication: Authentication): Promise<void>;

  findByToken(token: string): Promise<Authentication | null>;
}
