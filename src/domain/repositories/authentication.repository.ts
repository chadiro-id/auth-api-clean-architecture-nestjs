import { Authentication } from '../entities/authentication';

export interface AuthenticationRepository {
  save(authentication: Authentication): Promise<Authentication | null>;
  findByToken(token: string): Promise<Authentication | null>;
}
