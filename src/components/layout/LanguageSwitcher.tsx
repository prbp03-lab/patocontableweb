import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="language-switcher">
            <button
                className={`lang-button ${i18n.language === 'es' ? 'active' : ''}`}
                onClick={() => toggleLanguage('es')}
                aria-label="Cambiar a Español"
            >
                ES
            </button>
            <button
                className={`lang-button ${i18n.language === 'ca' ? 'active' : ''}`}
                onClick={() => toggleLanguage('ca')}
                aria-label="Canviar a Català"
            >
                CA
            </button>
        </div>
    );
};

export default LanguageSwitcher;
