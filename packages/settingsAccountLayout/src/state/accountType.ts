'use client';

import { delay } from '@rp/utils';

import { atom, useAtom } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';

import { useCallback } from 'react';

import { createUseStrappedValue } from './accountStrap';
import type { AccountType } from '../types/accountBootstrapData';

const accountTypeAtom = atom<AccountType | null>(null);
const statusAtom = atom<'idle' | 'updating' | 'success' | 'error'>('idle');

const useStrappedAccountType = createUseStrappedValue(({ type }) => type);

export function useAccountTypeState() {
  const bootstrapAccountType = useStrappedAccountType();
  useHydrateAtoms([[accountTypeAtom, bootstrapAccountType]]);

  const [status, setStatus] = useAtom(statusAtom);
  const [accountType, setAccountTypeInternal] = useAtom(accountTypeAtom);

  const setAccountType = useCallback(
    async (newAccountType: AccountType) => {
      setStatus('updating');
      // TODO: call the backend and save this change there
      await delay(2000);
      setStatus('success');
      setAccountTypeInternal(newAccountType);
    },
    [setAccountTypeInternal, setStatus],
  );

  // This shouldn't be possible due to the useHydrateAtoms call above, and is mostly here for TypeScript checking
  if (accountType === null) {
    throw new Error('Internal Error: account type not initialized');
  }
  return [{ status }, accountType, setAccountType] as const;
}
