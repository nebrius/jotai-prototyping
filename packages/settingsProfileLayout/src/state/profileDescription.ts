'use client';

import { createUseStrappedValue } from './profileStrap';

export const useProfileDescription = createUseStrappedValue(
  ({ description }) => description,
);
