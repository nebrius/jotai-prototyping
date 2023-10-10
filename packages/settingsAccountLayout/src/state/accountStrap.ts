'use client';

import { createStrap } from 'react-strapped';

import type { AccountBootstrapData } from '../types/accountBootstrapData';

export const {
  createUseStrappedValue,
  createUseStrappedState,
  Provider: AccountProvider,
} = createStrap<AccountBootstrapData>();
