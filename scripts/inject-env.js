#!/usr/bin/env node
import { writeFileSync, readFileSync, existsSync } from 'node:fs';

const url = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const key = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (!url || !key) {
  console.warn('Warning: VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY not set. Contact form will not work.');
  process.exit(0);
}

const envPath = '.env';
const lines = [`VITE_SUPABASE_URL=${url}`, `VITE_SUPABASE_ANON_KEY=${key}`];
writeFileSync(envPath, lines.join('\n') + '\n');
console.log('Injected Supabase env vars into .env for Vite build');
