import React from 'react';
import { useTranslation } from 'react-i18next';
import './Legal.css';

const CookiesPolicy: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="legal-page">
            <div className="container">
                <div className="legal-content glass-card">
                    <h1>{t('legal.cookies.title')}</h1>
                    <p className="legal-intro">{t('legal.cookies.intro')}</p>

                    <section>
                        <h2>{t('legal.cookies.analytics.title')}</h2>
                        <p>{t('legal.cookies.analytics.content')}</p>
                    </section>

                    <section>
                        <h2>{t('legal.cookies.management.title')}</h2>
                        <p>{t('legal.cookies.management.content')}</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CookiesPolicy;
