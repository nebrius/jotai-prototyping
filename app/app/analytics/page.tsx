import type { Metadata } from 'next';

import styles from './analytics.module.css';

export const metadata: Metadata = {
  title: 'Analytics',
};

// eslint-disable-next-line @typescript-eslint/require-await
export default async function AnalyticsPage() {
  return (
    <>
      <h3 className={styles.analyticsHeader}>Analytics page</h3>
    </>
  );
}
