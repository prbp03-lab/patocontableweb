import React from 'react';
import { useTranslation } from 'react-i18next';
import './ResultsScreen.css';

interface ResultsScreenProps {
    score: number;
    correct: number;
    total: number;
    onRestart: () => void;
    onExit: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({
    score,
    correct,
    total,
    onRestart,
    onExit
}) => {
    const { t } = useTranslation();
    const percentage = Math.round((correct / total) * 100);

    return (
        <div className="results-screen">
            <div className="results-badge">🎯</div>
            <h2 className="results-title">{t('game.results.title')}</h2>

            <div className="results-stats">
                <div className="res-stat-card">
                    <span className="res-stat-value">{correct} / {total}</span>
                    <span className="res-stat-label">{t('game.results.correct')}</span>
                </div>
                <div className="res-stat-card">
                    <span className="res-stat-value">+{score}</span>
                    <span className="res-stat-label">Capital XP</span>
                </div>
                <div className="res-stat-card full">
                    <div className="circular-progress">
                        <span className="percentage">{percentage}%</span>
                    </div>
                    <span className="res-stat-label">{t('game.results.percentage')}</span>
                </div>
            </div>

            <div className="results-actions">
                <button className="btn-primary btn-large" onClick={onRestart}>
                    {t('game.results.playAgain')}
                </button>
                <button className="btn-outline btn-large" onClick={onExit}>
                    {t('common.close')}
                </button>
            </div>
        </div>
    );
};

export default ResultsScreen;
