'use client';

import { createUseAsyncUpdateStateHook } from '@rp/state';
import { delay } from '@rp/utils';

import { createUseStrappedState } from './accountStrap';

export const useAccountTypeState = createUseAsyncUpdateStateHook(
  createUseStrappedState(({ type }) => type),
  async (newAccountType, setStatus, setAccountType) => {
    // Optimistically set the account type
    setAccountType(newAccountType);
    setStatus('updating');
    await delay(2000);
    // TODO: call the backend and save this change there
    setStatus('success');
  },
);
