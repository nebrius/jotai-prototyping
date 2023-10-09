'use client';

import { createStrap } from 'react-strapped';

import type { CommonBootstrapData } from '../types/commonBootstrapData';

const commonStrap = createStrap<CommonBootstrapData>();

export const {
  createUseStrappedValue,
  createUseStrappedState,
  Provider: CommonProvider,
} = commonStrap;
