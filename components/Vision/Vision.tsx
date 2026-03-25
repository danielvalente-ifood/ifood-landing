'use client';

import { Badge } from '@/components/Badge';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Vision.module.css';

const imgEllipse3 = "http://localhost:3845/assets/d47459b20e65813b2fbbf763d2830ee4193ecdb3.png";
const imgEllipse4 = "http://localhost:3845/assets/44624765a5c6800652bae7568a8b584d21a2e7e2.png";
const imgEllipse5 = "http://localhost:3845/assets/18951854d3270f6ce2748e86f0b4431faf9b16d5.png";

// Local images
const lojaBg = "/images/ifood/loja_bg.png";
const lojaIcon = "/images/ifood/loja-icon.png";
const pedidosBg = "/images/ifood/pedidos_bg.png";
const pedidosIcon = "/images/ifood/pedido-icon.png";
const entregadorBg = "/images/ifood/entregador_bg.png";
const entregadorIcon = "/images/ifood/entregador-icon.png";

export default function Vision() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className={`${styles.container} scroll-reveal ${isVisible ? 'visible' : ''}`}>
      {/* Header Section */}
      <div className={styles.headerSection}>
        <div className={styles.titleWrapper}>
          {/* Badge */}
          <Badge text="De Brasil e de comida a gente entende" />

          {/* Title */}
          <h2 className={styles.title}>
            <p>Conectamos milhares</p>
            <p>de restaurantes todos os dias</p>
          </h2>
        </div>

        {/* Ratings Section */}
        <div className={styles.ratingsSection}>
          <div className={styles.avatarsContainer}>
            <img src={imgEllipse3} alt="Avatar 1" className={styles.avatar} />
            <img src={imgEllipse4} alt="Avatar 2" className={styles.avatar} />
            <img src={imgEllipse5} alt="Avatar 3" className={styles.avatar} />
            <div className={styles.ratingsCountBadge}>
              <span>+8Mi</span>
            </div>
          </div>
          <p className={styles.ratingsText}>+8 milhões de avaliações</p>
        </div>
      </div>

      {/* Cards Section */}
      <div className={styles.cardsGrid}>
        {/* Card 1 - Lojas */}
        <div className={`${styles.card} ${styles.cardLojas}`}>
          <div className={styles.cardBg}>
            <img src={lojaBg} alt="Background" className={styles.bgImage} />
          </div>
          <div className={styles.cardGradient}></div>
          <div className={styles.cardContent}>
            <div className={`${styles.iconContainer} ${styles.iconLojas}`}>
              <img src={lojaIcon} alt="Loja Icon" className={styles.iconImage} />
            </div>
            <h3 className={styles.cardTitle}>450 mil lojas parceiras</h3>
          </div>
        </div>

        {/* Card 2 - Pedidos */}
        <div className={`${styles.card} ${styles.cardPedidos}`}>
          <div className={styles.cardBg}>
            <img src={pedidosBg} alt="Background" className={styles.bgImage} />
          </div>
          <div className={styles.cardGradient}></div>
          <div className={styles.cardContent}>
            <div className={`${styles.iconContainer} ${styles.iconPedidos}`}>
              <img src={pedidosIcon} alt="Pedidos Icon" className={styles.iconImage} />
            </div>
            <h3 className={styles.cardTitle}>180 milhões de pedidos/mês</h3>
          </div>
        </div>

        {/* Card 3 - Entregadores */}
        <div className={`${styles.card} ${styles.cardEntregadores}`}>
          <div className={styles.cardBg}>
            <img src={entregadorBg} alt="Background" className={styles.bgImage} />
          </div>
          <div className={styles.cardGradient}></div>
          <div className={styles.cardContent}>
            <div className={`${styles.iconContainer} ${styles.iconEntregadores}`}>
              <img src={entregadorIcon} alt="Entregador Icon" className={styles.iconImage} />
            </div>
            <h3 className={styles.cardTitle}>500 mil entregadores</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
