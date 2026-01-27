import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <div className="about-hero-content">
                        <div className="about-badge">
                            <span className="badge-dot"></span>
                            {t('about.badge')}
                        </div>
                        <h1 className="about-title">{t('about.title')}</h1>
                        <p className="about-subtitle">{t('about.subtitle')}</p>
                        <p className="about-description">{t('about.description')}</p>

                        <div className="cv-buttons">
                            <a href={t('about.cvLink')} download className="btn-primary">
                                <span className="material-symbols-outlined">download</span>
                                {t('about.downloadCV')}
                            </a>
                        </div>
                    </div>

                    <div className="about-hero-image">
                        <div className="profile-image-wrapper">
                            <img
                                src="/img/perfil_patricia.png"
                                alt="Patricia Bustos"
                                className="profile-image"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="profile-glow"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="skills-section">
                <div className="container">
                    <h2 className="section-title">{t('about.skills.title')}</h2>
                    <div className="skills-grid">
                        {t('about.skills.items', { returnObjects: true }).map((skill: string, index: number) => (
                            <div key={index} className="skill-badge badge-primary">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience & Education */}
            <section className="experience-section">
                <div className="container">
                    <div className="experience-grid">
                        {/* Experience */}
                        <div className="experience-column">
                            <h2 className="section-title">{t('about.experience.title')}</h2>
                            <div className="timeline">
                                {t('about.experience.items', { returnObjects: true }).map((exp: any, index: number) => (
                                    <div key={index} className="timeline-item glass-card">
                                        <div className="timeline-year">{exp.year}</div>
                                        <h3 className="timeline-title">{exp.role}</h3>
                                        <p className="timeline-company">{exp.company}</p>
                                        <p className="timeline-description">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div className="experience-column">
                            <h2 className="section-title">{t('about.education.title')}</h2>
                            <div className="timeline">
                                {t('about.education.items', { returnObjects: true }).map((edu: any, index: number) => (
                                    <div key={index} className="timeline-item glass-card">
                                        <div className="timeline-year">{edu.year}</div>
                                        <h3 className="timeline-title">{edu.title}</h3>
                                        <p className="timeline-company">{edu.institution}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Languages & Other Info */}
            <section className="additional-info">
                <div className="container">
                    <div className="info-grid">
                        <div className="info-card glass-card">
                            <h3 className="info-title">{t('about.languages.title')}</h3>
                            <div className="languages-list">
                                {t('about.languages.items', { returnObjects: true }).map((lang: any, index: number) => (
                                    <div key={index} className="language-item">
                                        <span className="language-name">{lang.name}</span>
                                        <span className="language-level badge-primary">{lang.level}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="info-card glass-card">
                            <h3 className="info-title">{t('about.other.title')}</h3>
                            <div className="other-info">
                                <span className="material-symbols-outlined">directions_car</span>
                                <p>{t('about.other.driver')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
