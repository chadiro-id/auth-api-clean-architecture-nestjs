import { MigrationBuilder } from 'node-pg-migrate';

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable('authentications', {
    id: {
      type: 'UUID',
      default: pgm.func('gen_random_uuid()'),
    },
    account_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    token: {
      type: 'TEXT',
      notNull: true,
    },
    expiry_date: {
      type: 'TIMESTAMPTZ',
      notNull: true,
    },
    created_at: {
      type: 'TIMESTAMPTZ',
    },
  });

  pgm.addConstraint('authentications', 'authentications_account_id_fkey', {
    foreignKeys: {
      columns: 'account_id',
      references: 'accounts(id)',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  });
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropConstraint('authentications', 'authentications_account_id_fkey');
  pgm.dropTable('authentications');
}
