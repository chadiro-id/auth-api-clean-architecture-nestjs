import { MigrationBuilder } from 'node-pg-migrate';

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable('users', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    username: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    password: {
      type: 'VARCHAR(100)',
      notNull: true,
    },
    email: {
      type: 'VARCHAR(255)',
      notNull: true,
    },
    fullname: {
      type: 'VARCHAR(1000)',
      notNull: true,
    },
    created_at: {
      type: 'TIMESTAMPTZ',
    },
    update_at: {
      type: 'TIMESTAMPTZ',
    },
  });
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropTable('users');
}
