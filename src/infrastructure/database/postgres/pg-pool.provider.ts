import { Pool } from 'pg';
import { ConfigType } from '@nestjs/config';
import databaseConfig from 'src/infrastructure/config/database.config';

export const PG_POOL_KEY = 'PG_POOL';

export const PgPoolProvider = {
  provide: PG_POOL_KEY,
  useFactory: (config: ConfigType<typeof databaseConfig>): Pool => {
    const pool = new Pool({
      ...config.pg,
      port: config.pg.port ? parseInt(config.pg.port) : 5432,
    });

    pool.on('connect', () => {
      console.log('PostgreSQL pool connected.');
    });

    pool.on('error', (err) => {
      console.error('Unexpected error on idle client', err);
      process.exit(-1);
    });

    return pool;
  },
  inject: [databaseConfig.KEY],
};
