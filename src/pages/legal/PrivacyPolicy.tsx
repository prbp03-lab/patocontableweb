import React from 'react';
import { useTranslation } from 'react-i18next';
import './Legal.css';

const PrivacyPolicy: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="legal-page">
            <div className="container">
                <div className="legal-content glass-card">
                    <h1>{t('legal.privacy.title')}</h1>
                    <p className="legal-intro">{t('legal.privacy.intro')}</p>

                    <section>
                        <h2>{t('legal.privacy.collection.title')}</h2>
                        <p>{t('legal.privacy.collection.content')}</p>
                    </section>

                    <section>
                        <h2>{t('legal.privacy.purpose.title')}</h2>
                        <p>{t('legal.privacy.purpose.content')}</p>
                    </section>

                    <section>
                        <h2>{t('legal.privacy.rights.title')}</h2>
                        <p>{t('legal.privacy.rights.content')}</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
