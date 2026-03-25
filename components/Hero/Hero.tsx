'use client';

import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Hero.module.css';

const heroImage = '/images/ifood/bg_ifood_ecossistema.png';
const logoDecor = 'http://localhost:3845/assets/bca816e60507dce150c7dbad6981464dc5a59796.svg';

export default function Hero() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className={`${styles.hero} scroll-reveal ${isVisible ? 'visible' : ''}`}>
      {/* Background Image with container */}
      <div className={styles.backgroundContainer}>
        <img
          src={heroImage}
          alt="Hero Background"
          className={styles.backgroundImage}
        />
      </div>

      {/* Main Content Wrapper - 1600px centered */}
      <div className={styles.contentWrapper}>
        {/* Text Content */}
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            <span>Seu negócio pede</span>
            <span>ecossistema conectado</span>
          </h1>

          <p className={styles.description}>
            An award-winning SEO agency with disciplines in digital marketing, design, and website development. focused on understanding you.
          </p>

          <button className={styles.ctaButton}>
            <span>Conheça</span>
            <img
              src="/images/ifood/icon-chevron-right.svg"
              alt=""
              className={styles.chevronIcon}
            />
          </button>
        </div>

        {/* Decorative Logo */}
        <img
          src={logoDecor}
          alt="Logo Decoration"
          className={styles.logoDecor}
          style={{
            width: '209px',
            height: '105px'
          }}
        />
      </div>
    </div>
  );
}
