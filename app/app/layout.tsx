import Link from 'next/link';

import styles from './dashboard.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link href="/analytics">Analytics</Link>
        <Link href="/settings">Settings</Link>
      </nav>
      <div className={styles.content}>{children}</div>
    </div>
  );
}