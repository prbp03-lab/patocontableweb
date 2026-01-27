import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import './Legal.css';

const LegalNotice: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('seo.legal.notice.title')}</title>
                <meta name="description" content={t('seo.legal.notice.description')} />
            </Helmet>
            <div className="legal-page">
                <div className="container">
                    <div className="legal-content glass-card">
                        <h1>{t('legal.notice.title')}</h1>

                        <section>
                            <h2>1. {t('legal.notice.id.title')}</h2>
                            <p>{t('legal.notice.id.content')}</p>
                            <ul>
                                <li><strong>{t('legal.notice.id.owner_label')}:</strong> Patricia Rocio Bustos Paco</li>
                                <li><strong>{t('legal.notice.id.name_label')}:</strong> Pato Contable</li>
                                <li><strong>{t('legal.notice.id.address_label')}:</strong> Barcelona-Granollers, España</li>
                                <li><strong>{t('legal.notice.id.email_label')}:</strong> patocontable@outlook.com</li>
                                <li><strong>{t('legal.notice.id.web_label')}:</strong> www.patocontable.com</li>
                            </ul>
                        </section>

                        <section>
                            <h2>2. {t('legal.notice.property.title')}</h2>
                            <p>{t('legal.notice.property.content')}</p>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LegalNotice;
