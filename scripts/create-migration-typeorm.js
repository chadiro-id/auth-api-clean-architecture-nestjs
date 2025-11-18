const { execSync } = require('child_process');
const path = require('path');

const migrationName = process.argv[2];
if (!migrationName) {
  console.error('Usage: npm run migration:new <migration-name>');
  process.exit(1);
}

const migrationPath = path.join('migrations', migrationName);
const command = `npx typeorm migration:create ${migrationPath}`;

console.log(`Creating migration: ${migrationName}`);
execSync(command, { stdio: 'inherit' });