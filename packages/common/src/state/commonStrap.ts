'use client';

import { createStrap } from 'react-strapped';

import type { CommonBootstrapData } from '../types/commonBootstrapData';

export const {
  createUseStrappedValue,
  createUseStrappedState,
  Provider: CommonProvider,
} = createStrap<CommonBootstrapData>();
