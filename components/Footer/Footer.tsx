'use client';

import styles from './Footer.module.css';

const facebookIcon = '/images/ifood/logo-facebook.svg';
const instagramIcon = '/images/ifood/logo-instagram.svg';
const linkedinIcon = '/images/ifood/logo-linkedin.svg';
const ifoodLogo = '/images/ifood/logo_footer.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Links Sections */}
        <div className={styles.columnsWrapper}>
          {/* iFood */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>iFood</h3>
            <ul className={styles.linksList}>
              <li><a href="#">Portal do Parceiro</a></li>
              <li><a href="#">Carreiras no iFood</a></li>
              <li><a href="#">Blog para Parceiros</a></li>
            </ul>
          </div>

          {/* Saiba mais */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Saiba mais</h3>
            <ul className={styles.linksList}>
              <li><a href="#">Privacidade</a></li>
              <li><a href="#">Código de conduta</a></li>
            </ul>
          </div>

          {/* Delivery */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Delivery</h3>
            <ul className={styles.linksList}>
              <li><a href="#">Plataforma</a></li>
              <li><a href="#">Central de crescimento</a></li>
              <li><a href="#">Logística</a></li>
              <li><a href="#">Gestão de pedidos</a></li>
            </ul>
          </div>

          {/* Salão */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>
              Salão
              <span className={styles.newBadge}>Novo</span>
            </h3>
            <ul className={styles.linksList}>
              <li><a href="#">Comer fora</a></li>
              <li><a href="#">PDV</a></li>
              <li><a href="#">CRM 360</a></li>
              <li><a href="#">Relatórios e Insights</a></li>
              <li><a href="#">Gestão financeira</a></li>
            </ul>
          </div>

          {/* iFood Ads */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>iFood Ads</h3>
            <ul className={styles.linksList}>
              <li><a href="#">Plataforma de anúncios</a></li>
              <li><a href="#">Campanhas premium</a></li>
              <li><a href="#">Analytics para marcas</a></li>
            </ul>
          </div>

          {/* iFood Pago */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>iFood Pago</h3>
            <ul className={styles.linksList}>
              <li><a href="#">Conta digital</a></li>
              <li><a href="#">Antecipação</a></li>
              <li><a href="#">Crédito</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright & Social */}
        <div className={styles.bottomSection}>
          <div className={styles.copyrightSection}>
            <p className={styles.copyright}>
              © Copyright 2026 - iFood - Todos os direitos reservados iFood com Agência de Restaurantes Online S.A
            </p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook" className={styles.socialIcon}>
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="#" aria-label="Instagram" className={styles.socialIcon}>
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </div>
          </div>
          <div className={styles.logoWrapper}>
            <img src={ifoodLogo} alt="iFood" />
          </div>
        </div>
      </div>
    </footer>
  );
}
