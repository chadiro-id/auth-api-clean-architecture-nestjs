import { MigrationBuilder } from 'node-pg-migrate';

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable('identities', {
    id: {
      type: 'UUID',
      default: pgm.func('gen_random_uuid()'),
    },
    account_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    provider_type: {
      type: 'VARCHAR',
      check: "provider_type IN('USERNAME', 'EMAIL', 'GOOGLE')",
    },
    provider_id: {
      type: 'VARCHAR',
      notNull: true,
    },
    created_at: {
      type: 'TIMESTAMPTZ',
    },
  });

  pgm.addConstraint('identities', 'identities_account_id_fkey', {
    foreignKeys: {
      columns: 'account_id',
      references: 'accounts(id)',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  });
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropConstraint('identities', 'identities_account_id_fkey');
  pgm.dropTable('identities');
}
