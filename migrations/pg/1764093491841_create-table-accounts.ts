import { MigrationBuilder } from 'node-pg-migrate';

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable('accounts', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    user_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    password: {
      type: 'TEXT',
    },
    status: {
      type: 'VARCHAR',
      check: "status IN ('ACTIVE', 'SUSPENDED', 'DELETED')",
    },
    is_delete: {
      type: 'BOOLEAN',
      default: false,
    },
    created_at: {
      type: 'TIMESTAMPTZ',
    },
  });

  pgm.addConstraint('accounts', 'accounts_user_id_fkey', {
    foreignKeys: {
      columns: 'user_id',
      references: 'users(id)',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  });
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropConstraint('accounts', 'accounts_user_id_fkey');
  pgm.dropTable('accounts');
}
