import { drizzle } from 'drizzle-orm/node-postgres';
import { config } from 'dotenv';
import * as schema from './schema';

// Load environment variables
config({ path: '.env.local' });

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set');
}

export const db = drizzle(process.env.DATABASE_URL, { schema });