import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import QuizGame from '../jepgc/components/QuizGame';
import ResultsScreen from '../jepgc/components/ResultsScreen';
import './Home.css';

const Home: React.FC = () => {
    const { t } = useTranslation();
    const [gameState, setGameState] = useState<'landing' | 'playing' | 'results'>('landing');
    const [lastScore, setLastScore] = useState({ score: 0, correct: 0 });

    const handleStartGame = () => {
        setGameState('playing');
    };

    const handleFinishGame = (score: number, correct: number) => {
        setLastScore({ score, correct });
        setGameState('results');
    };

    const handleRestart = () => {
        setGameState('playing');
    };

    const handleExit = () => {
        setGameState('landing');
    };

    if (gameState === 'playing') {
        return (
            <div className="home-page game-mode">
                <div className="container">
                    <QuizGame
                        onFinish={handleFinishGame}
                        onCancel={handleExit}
                    />
                </div>
            </div>
        );
    }

    if (gameState === 'results') {
        return (
            <div className="home-page game-mode">
                <div className="container">
                    <ResultsScreen
                        score={lastScore.score}
                        correct={lastScore.correct}
                        total={5} // El service devuelve 5 por defecto
                        onRestart={handleRestart}
                        onExit={handleExit}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            {t('home.badge')}
                        </div>

                        <h1 className="hero-title animate-fade-in">
                            {t('home.title')}
                        </h1>

                        <p className="hero-subtitle animate-fade-in">
                            {t('home.subtitle')}
                        </p>

                        <p className="hero-description animate-fade-in">
                            {t('home.description')}
                        </p>

                        <div className="hero-actions animate-fade-in">
                            <button className="btn-primary btn-large" onClick={handleStartGame}>
                                {t('home.playButton')}
                            </button>
                            <Link to="/game-info" className="btn-outline btn-large">
                                {t('home.learnMore')}
                            </Link>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="hero-icon">
                            <img src="/img/pc.jpeg" alt="PatoContable" className="hero-pato-img" />
                        </div>
                        <div className="hero-glow"></div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <div className="container">
                    <h2 className="section-title">{t('home.features.title')}</h2>

                    <div className="features-grid">
                        <div className="feature-card glass-card">
                            <div className="feature-icon">🎯</div>
                            <h3 className="feature-title">{t('home.features.interactive.title')}</h3>
                            <p className="feature-description">{t('home.features.interactive.description')}</p>
                        </div>

                        <div className="feature-card glass-card">
                            <div className="feature-icon">📊</div>
                            <h3 className="feature-title">{t('home.features.levels.title')}</h3>
                            <p className="feature-description">{t('home.features.levels.description')}</p>
                        </div>

                        <div className="feature-card glass-card">
                            <div className="feature-icon">⚡</div>
                            <h3 className="feature-title">{t('home.features.realTime.title')}</h3>
                            <p className="feature-description">{t('home.features.realTime.description')}</p>
                        </div>

                        <div className="feature-card glass-card">
                            <div className="feature-icon">📚</div>
                            <h3 className="feature-title">{t('home.features.comprehensive.title')}</h3>
                            <p className="feature-description">{t('home.features.comprehensive.description')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
