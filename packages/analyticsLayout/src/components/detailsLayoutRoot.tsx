'use client';

import { Views } from './views';
import { AnalyticsProvider } from '../state/analyticsStrap';
import type { AnalyticsBootstrapData } from '../types/analyticsBootstrapData';

interface DetailsLayoutRootProps {
  bootstrapData: AnalyticsBootstrapData;
}

export function DetailsLayoutRoot({ bootstrapData }: DetailsLayoutRootProps) {
  return (
    <AnalyticsProvider bootstrapData={bootstrapData}>
      <Views />
    </AnalyticsProvider>
  );
}
