'use client';

import { createUseStrappedValue } from './commonStrap';

export const useCurrentUser = createUseStrappedValue(
  ({ currentUser }) => currentUser,
);
