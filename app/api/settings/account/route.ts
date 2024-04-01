import type { AccountBootstrapData } from '@rp/settingsAccountLayout';
import { delay } from '@rp/utils';
import { NextResponse } from 'next/server';

export async function GET() {
  console.log('GET api/settings/account');
  await delay(2000);
  const bootstrapData: AccountBootstrapData = {
    type: 'pro',
  };
  return NextResponse.json(bootstrapData);
}
