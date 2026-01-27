import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import './GameInfo.css';

const GameInfo: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('seo.gameInfo.title')}</title>
                <meta name="description" content={t('seo.gameInfo.description')} />
            </Helmet>
            <div className="game-info-page">
                <section className="game-info-hero">
                    <div className="container">
                        <h1 className="page-title">{t('gameInfo.title')}</h1>
                        <p className="page-subtitle">{t('gameInfo.subtitle')}</p>
                    </div>
                </section>

                <div className="container">
                    {/* About Section */}
                    <section className="info-section">
                        <div className="info-card glass-card">
                            <h2 className="info-card-title">{t('gameInfo.about.title')}</h2>
                            <p className="info-card-text">{t('gameInfo.about.description')}</p>
                        </div>
                    </section>

                    {/* Objectives Section */}
                    <section className="info-section">
                        <div className="info-card glass-card">
                            <h2 className="info-card-title">{t('gameInfo.objectives.title')}</h2>
                            <ul className="objectives-list">
                                {(t('gameInfo.objectives.items', { returnObjects: true }) as any).map((item: string, index: number) => (
                                    <li key={index} className="objective-item">
                                        <span className="material-symbols-outlined filled-icon">check_circle</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Methodology Section */}
                    <section className="info-section">
                        <div className="info-card glass-card">
                            <h2 className="info-card-title">{t('gameInfo.methodology.title')}</h2>
                            <p className="info-card-text">{t('gameInfo.methodology.description')}</p>
                        </div>
                    </section>

                    {/* Copyright Section */}
                    <section className="info-section">
                        <div className="info-card glass-card copyright-card">
                            <div className="copyright-icon">
                                <span className="material-symbols-outlined filled-icon">verified</span>
                            </div>
                            <h2 className="info-card-title">{t('gameInfo.copyright.title')}</h2>
                            <p className="info-card-text">{t('gameInfo.copyright.description')}</p>
                            <div className="copyright-badge">
                                <span className="material-symbols-outlined">shield</span>
                                {t('gameInfo.copyright.registered')}
                            </div>
                            <a
                                href="/img/SafeCreativeNotice-2601234346797.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                            >
                                <span className="material-symbols-outlined">description</span>
                                {t('gameInfo.copyright.viewCertificate')}
                            </a>
                        </div>
                    </section>

                    {/* Credits Section */}
                    <section className="info-section">
                        <div className="credits-card">
                            <h3 className="credits-title">{t('gameInfo.credits.title')}</h3>
                            <p className="credits-author">{t('gameInfo.credits.author')}</p>
                            <p className="credits-year">{t('gameInfo.credits.year')}</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default GameInfo;
