'use client';

import { createStrap } from 'react-strapped';

import type { AnalyticsBootstrapData } from '../types/analyticsBootstrapData';

export const {
  createUseStrappedValue,
  createUseStrappedState,
  Provider: AnalyticsProvider,
} = createStrap<AnalyticsBootstrapData>();
