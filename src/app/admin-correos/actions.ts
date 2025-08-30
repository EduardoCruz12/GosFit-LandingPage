'use server';

import { db } from '@/lib/db';

export async function getSubscriptions() {
  // In a real app, you'd add authentication checks here
  // to ensure only authorized users can access this data.
  return await db.getSubscriptions();
}
