'use client';

import { createUseAsyncUpdateStateHook } from '@rp/state';
import { delay } from '@rp/utils';

import { createUseStrappedState } from './accountStrap';

export const useAccountTypeState = createUseAsyncUpdateStateHook(
  createUseStrappedState(({ type }) => type),
  async (newAccountType, setStatus, setAccountTypeAtom) => {
    // Optimistically set
    setAccountTypeAtom(newAccountType);
    setStatus('updating');
    await delay(2000);
    setStatus('success');
  },
);
