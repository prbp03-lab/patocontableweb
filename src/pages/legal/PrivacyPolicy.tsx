import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import './Legal.css';

const PrivacyPolicy: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('seo.legal.privacy.title')}</title>
                <meta name="description" content={t('seo.legal.privacy.description')} />
            </Helmet>
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
        </>
    );
};

export default PrivacyPolicy;
