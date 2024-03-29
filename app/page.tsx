import styles from './app.module.css';

// This needs to be an async component for Next.js to recognize this as an RSC
// eslint-disable-next-line @typescript-eslint/require-await
export default async function Index() {
  return (
    <div>
      <div className={styles.section}>
        This sample app shows off React Strapped, Jotai, and Next.js. The demo
        is written twice: once using the older pages approach, and the other
        using the new app-router.
      </div>
      <div className={styles.section}>
        App-router based pages:
        <ul>
          <li>
            <a href="/app/settings">Settings page</a>
          </li>
          <li>
            <a href="/app/analytics">Analytics page</a>
          </li>
        </ul>
      </div>
      <div className={styles.section}>
        Pages based pages:
        <ul>
          <li>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/pages/settings">Settings page</a>
          </li>
          <li>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/pages/analytics">Analytics page</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
