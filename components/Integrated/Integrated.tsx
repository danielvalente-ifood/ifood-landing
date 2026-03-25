'use client';

import { Badge } from '@/components/Badge';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Integrated.module.css';

const integrationImage = "http://localhost:3845/assets/184a7a20db527be3831710d4f0b17866bdcd6664.png";
const lojaIcon = "/images/ifood/loja-icon.png";
const peopleIcon = "/images/ifood/people_icon.png";
const starIcon = "/images/ifood/star_icon.png";

const features = [
  {
    id: 1,
    title: 'Delivery e Salão',
    subtitle: 'em uma plataforma',
    description: 'Gerencie pedidos online e experiências presenciais no mesmo lugar. Dados unificados, gestão simplificada, crescimento amplificado.',
    icon: lojaIcon
  },
  {
    id: 2,
    title: 'Visão 360°',
    subtitle: 'dos seus clientes',
    description: 'Conheça o histórico completo: o que pedem online, quando visitam o salão, preferências e ticket médio. Inteligência que nenhum concorrente oferece.',
    icon: peopleIcon
  },
  {
    id: 3,
    title: 'Pagamentos, logística e',
    subtitle: 'gestão integrados',
    description: 'Recebimento automático, entregas eficientes e ferramentas de gestão que conversam entre si. Sem integrações complexas, sem dor de cabeça.',
    icon: starIcon
  }
];

export default function Integrated() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className={`${styles.container} scroll-reveal ${isVisible ? 'visible' : ''}`}>
      {/* Header */}
      <div className={styles.headerContent}>
        <Badge text="Visão integrada" />
        <h2 className={styles.title}>Por que escolher o ecossistema completo do iFood?</h2>
      </div>

      {/* Background Image */}
      <div className={styles.imageContainer}>
        <img src={integrationImage} alt="Visão integrada" className={styles.image} />
      </div>

      {/* Features Grid */}
      <div className={styles.cardsGrid}>
        {features.map((feature, index) => (
          <div key={feature.id} className={styles.card} style={{ animationDelay: `${0.15 + index * 0.1}s` }}>
            <div className={styles.iconContainer}>
              <img src={feature.icon} alt="Icon" className={styles.icon} />
            </div>
            <div className={styles.cardTitleWrapper}>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              {feature.subtitle && <p className={styles.cardSubtitle}>{feature.subtitle}</p>}
            </div>
            <p className={styles.cardDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
