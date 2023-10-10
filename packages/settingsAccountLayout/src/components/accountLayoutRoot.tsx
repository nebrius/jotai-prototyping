'use client';

import { AccountType } from './accountType';
import { AccountProvider } from '../state/accountStrap';
import type { AccountBootstrapData } from '../types/accountBootstrapData';

interface AccountLayoutRootProps {
  bootstrapData: AccountBootstrapData;
}

export function AccountLayoutRoot({ bootstrapData }: AccountLayoutRootProps) {
  return (
    <AccountProvider bootstrapData={bootstrapData}>
      <AccountType />
    </AccountProvider>
  );
}
