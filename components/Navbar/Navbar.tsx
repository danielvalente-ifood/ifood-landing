'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { createPortal } from 'react-dom';
import { ifoodImages } from '@/public/images/ifood/config';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import styles from './Navbar.module.css';

// Chevron icons from Figma
const iconChevronUp = 'http://localhost:3845/assets/e7a1378c903ef8c43e7f7ae6724b390c5662e9af.svg';
const iconChevronDown = 'http://localhost:3845/assets/7c5ef2b9d360db62568aeb5704ca7272283cba9e.svg';

type NavItem = {
  label: string;
  href?: string;
  hasDropdown?: boolean;
};

const navItems: NavItem[] = [
  { label: 'Delivery', hasDropdown: false, href: '/delivery' },
  { label: 'Salão', hasDropdown: true },
  { label: 'iFood Pago', hasDropdown: false, href: '/ifood-pago' },
  { label: 'Logística', hasDropdown: false, href: '/logistica' },
  { label: 'Ads', hasDropdown: false, href: '/ads' },
];

interface NavbarProps {
  forceSticky?: boolean;
  fullWidthFixed?: boolean;
}

export default function Navbar({ forceSticky = false, fullWidthFixed = false }: NavbarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const scrollY = useScrollPosition();
  const isSticky = fullWidthFixed || forceSticky || scrollY > 100;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const navContent = (
    <nav className={`${styles.navbar} ${fullWidthFixed ? styles.navbarFullWidthFixed : ''} ${isSticky && !fullWidthFixed ? styles.navbarSticky : ''}`}>
      <div className={styles.container}>
        {/* Left Section - Logo + Navigation Items */}
        <div className={styles.leftSection}>
          {/* Logo */}
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logo}>
              <Image
                src={ifoodImages.logo.src}
                alt={ifoodImages.logo.alt}
                width={55}
                height={30}
              />
            </div>
          </Link>

          {/* Navigation Items */}
          <div className={styles.navItems}>
            {navItems.map((item) => (
              <div key={item.label} className={styles.navItemWrapper}>
                {item.href ? (
                  <Link href={item.href} className={styles.navButton}>
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <button
                    className={styles.navButton}
                    onClick={() => item.hasDropdown && handleDropdownToggle(item.label)}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <div className={`${styles.chevron} ${
                        activeDropdown === item.label ? styles.chevronOpen : ''
                      }`}>
                        <img
                          src={iconChevronUp}
                          alt=""
                          className={styles.chevronIcon}
                        />
                        <img
                          src={iconChevronDown}
                          alt=""
                          className={styles.chevronIcon}
                        />
                      </div>
                    )}
                  </button>
                )}

                {/* Dropdown Placeholder */}
                {item.hasDropdown && activeDropdown === item.label && (
                  <div className={styles.dropdown}>
                    <p className={styles.dropdownPlaceholder}>
                      Submenu para {item.label}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button className={styles.ctaButton}>
          Entrar no portal
        </button>
      </div>
    </nav>
  );

  if ((isSticky || fullWidthFixed) && mounted) {
    return createPortal(navContent, document.body);
  }

  return navContent;
}
