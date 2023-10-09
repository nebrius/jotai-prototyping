'use client';

import { createUseStrappedValue } from './analyticsStrap';

export const useAnalyticsViews = createUseStrappedValue(({ views }) => views);
