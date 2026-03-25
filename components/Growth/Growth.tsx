'use client';

import { useState, useRef, useEffect } from 'react';
import { Badge } from '@/components/Badge';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Growth.module.css';

const fadeTransition = {
  transition: 'opacity 0.4s ease-out'
};

const chevronIcon = '/images/ifood/icon-chevron-right.svg';

const deliveryCards = [
  {
    id: 1,
    title: 'CRM 360',
    description: 'Dados unificados que transformam clientes em vendas'
  },
  {
    id: 2,
    title: 'PDV',
    description: 'Sistema de ponto de venda robusto e intuitivo'
  },
  {
    id: 3,
    title: 'Totem',
    description: 'Autoatendimento inteligente para sua loja'
  },
  {
    id: 4,
    title: 'Cardápio Digital',
    description: 'Cardápio interativo e fácil de gerenciar'
  },
  {
    id: 5,
    title: 'Integrações',
    description: 'Conecte com os principais sistemas do mercado'
  },
  {
    id: 6,
    title: 'Analytics',
    description: 'Dashboard com dados em tempo real'
  },
  {
    id: 7,
    title: 'Gestão de Pedidos',
    description: 'Controle total de seus pedidos'
  },
  {
    id: 8,
    title: 'Gateway de Pagamento',
    description: 'Múltiplas formas de pagamento seguras'
  }
];

const salaoCards = [
  {
    id: 1,
    title: 'Gerenciamento de Mesas',
    description: 'Controle eficiente de ocupação de mesas'
  },
  {
    id: 2,
    title: 'Comanda Digital',
    description: 'Comanda eletrônica para melhor experiência'
  },
  {
    id: 3,
    title: 'Reservas Online',
    description: 'Sistema de reservas integrado e automático'
  },
  {
    id: 4,
    title: 'Menu Interativo',
    description: 'Cardápio digital com fotos e recomendações'
  },
  {
    id: 5,
    title: 'Chamada de Garçom',
    description: 'Sistema inteligente de atendimento'
  },
  {
    id: 6,
    title: 'Relatórios Detalhados',
    description: 'Análise completa do desempenho'
  },
  {
    id: 7,
    title: 'Programa de Fidelização',
    description: 'Mantenha clientes engajados e voltando'
  },
  {
    id: 8,
    title: 'Integração com Delivery',
    description: 'Unifique sua operação de salão e delivery'
  }
];

export default function Growth() {
  const [activeTab, setActiveTab] = useState<'delivery' | 'salao'>('delivery');
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const { ref, isVisible } = useScrollReveal();

  const currentCards = activeTab === 'delivery' ? deliveryCards : salaoCards;

  const handleTabChange = (tab: 'delivery' | 'salao') => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsTransitioning(false);
    }, 200);
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const cardWidth = 519.333 + 10; // card width + gap
      const index = Math.round(scrollLeft / cardWidth);
      setActiveCardIndex(Math.min(index, currentCards.length - 1));
    }
  };

  // Reset scroll when changing tabs
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = 0;
    }
    setActiveCardIndex(0);
  }, [activeTab]);

  const totalDots = Math.min(currentCards.length, 3);
  const activeDotIndex = Math.min(activeCardIndex, totalDots - 1);

  return (
    <div ref={ref} className={`${styles.container} scroll-reveal ${isVisible ? 'visible' : ''}`}>
      {/* Header Section */}
      <div className={styles.headerSection}>
        <div className={styles.titleWrapper}>
          {/* Badge */}
          <Badge text="Cresça com a gente" />

          {/* Title */}
          <h2 className={styles.title}>
            <p>Para cada tipo de negócio,</p>
            <p>um iFood que te ajuda a vender mais</p>
          </h2>
        </div>
      </div>

      {/* Slider Section */}
      <div className={styles.sliderWrapper}>
        {/* Tab Switch */}
        <div className={styles.tabSwitch} data-active={activeTab}>
          <button
            className={`${styles.tabButton} ${activeTab === 'delivery' ? styles.tabActive : ''}`}
            onClick={() => handleTabChange('delivery')}
          >
            Delivery
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'salao' ? styles.tabActive : ''}`}
            onClick={() => handleTabChange('salao')}
          >
            Salão
          </button>
        </div>
        <div
          className={styles.sliderContainer}
          ref={sliderRef}
          onScroll={handleScroll}
          style={{
            opacity: isTransitioning ? 0 : 1,
            ...fadeTransition
          }}
        >
          {currentCards.map((card) => (
            <div key={card.id} className={styles.sliderCard}>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <div className={styles.cardFooter}>
                  <p className={styles.cardDescription}>{card.description}</p>
                  <img src={chevronIcon} alt="Chevron" className={styles.cardIcon} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Indicator */}
        <div
          className={styles.indicatorWrapper}
          style={{
            opacity: isTransitioning ? 0 : 1,
            ...fadeTransition
          }}
        >
          <div className={styles.indicatorTrack}>
            <div className={styles.indicatorDots}>
              {Array.from({ length: totalDots }).map((_, index) => (
                <div
                  key={index}
                  className={`${styles.dot} ${index === activeDotIndex ? styles.dotActive : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
