'use client';

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Vision } from '@/components/Vision';
import { Growth } from '@/components/Growth';
import { Integrated } from '@/components/Integrated';
import { Results } from '@/components/Results';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.navbarWrapper}>
          <Navbar />
        </div>
        <Hero />
      </div>
      <Vision />
      <Growth />
      <Integrated />
      <Results />
      <FAQ />
      <Footer />
    </div>
  );
}
