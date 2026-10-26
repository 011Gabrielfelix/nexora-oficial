import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? '';

function createSafeClient(): SupabaseClient {
  if (!supabaseUrl || !supabaseAnonKey) {
    const stub = {
      from: () => ({
        insert: async () => ({ data: null, error: new Error('Supabase não configurado') }),
        select: async () => ({ data: [], error: null }),
        update: async () => ({ data: null, error: null }),
        delete: async () => ({ data: null, error: null }),
      }),
    };
    return stub as unknown as SupabaseClient;
  }
  try {
    return createClient(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: false },
    });
  } catch {
    const stub = {
      from: () => ({
        insert: async () => ({ data: null, error: new Error('Supabase indisponível') }),
      }),
    };
    return stub as unknown as SupabaseClient;
  }
}

export const supabase = createSafeClient();
