'use client';

import { Navbar } from '@/components/Navbar';
import styles from './page.module.css';

export default function Ads() {
  return (
    <div className={styles.container}>
      <div className={styles.navbarWrapper}>
        <Navbar fullWidthFixed={true} />
      </div>
      <div className={styles.content}>
        <iframe
          src="/api/proxy-ads"
          title="iFood Ads"
          className={styles.iframe}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
    </div>
  );
}
