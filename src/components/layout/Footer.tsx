import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <div className="footer-logo">
                        <span className="footer-logo-icon">
                            <img src="/img/logo-pato-nuevo.webp" alt="PatoContable Logo" className="footer-logo-img" />
                        </span>
                        <span className="footer-logo-text">PatoContable</span>
                    </div>
                    <p className="footer-tagline">
                        {t('home.subtitle')}
                    </p>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">{t('about.contact.title')}</h4>
                    <p className="footer-text">{t('about.contact.email')}</p>
                    <p className="footer-text">{t('footer.location')}</p>
                    <a
                        href="https://www.linkedin.com/in/patricia-bustos-paco/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        <span className="material-symbols-outlined">link</span>
                        {t('about.contact.linkedin')}
                    </a>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">{t('gameInfo.copyright.title')}</h4>
                    <p className="footer-text">{t('footer.gameRegistered')}</p>
                    <a
                        href="/img/SafeCreativeNotice-2601234346797.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        <span className="material-symbols-outlined">verified</span>
                        {t('gameInfo.copyright.viewCertificate')}
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container footer-bottom-content">
                    <p className="footer-copyright">
                        © {currentYear} PatoContable • {t('footer.rights')}
                    </p>
                    <div className="footer-legal-links">
                        <Link to="/aviso-legal" className="footer-legal-link">{t('footer.legal.notice')}</Link>
                        <Link to="/privacidad" className="footer-legal-link">{t('footer.legal.privacy')}</Link>
                        <Link to="/cookies" className="footer-legal-link">{t('footer.legal.cookies')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
