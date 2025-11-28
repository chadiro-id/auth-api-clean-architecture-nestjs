import { MigrationBuilder } from 'node-pg-migrate';

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable('authentications', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    user_id: {
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

  pgm.addConstraint('authentications', 'authentications_user_id_fkey', {
    foreignKeys: {
      columns: 'user_id',
      references: 'users(id)',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  });
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropConstraint('authentications', 'authentications_user_id_fkey');
  pgm.dropTable('authentications');
}
