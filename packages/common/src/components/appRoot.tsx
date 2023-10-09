'use client';

import type { PropsWithChildren } from 'react';

import { AppHeader } from './header';
import styles from './styles.module.css';
import { CommonProvider } from '../state/commonStrap';
import type { CommonBootstrapData } from '../types/commonBootstrapData';

interface AppRoot {
  bootstrapData: CommonBootstrapData;
}

export function AppWrapper({
  children,
  bootstrapData,
}: PropsWithChildren<AppRoot>) {
  return (
    <CommonProvider bootstrapData={bootstrapData}>
      <AppHeader />
      <div className={styles.appContent}>{children}</div>
      <footer className={styles.appFooter}>Footer content</footer>
    </CommonProvider>
  );
}
