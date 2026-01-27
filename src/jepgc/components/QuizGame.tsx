import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Level, Question } from '../types';
import { QuizService } from '../services/QuizService';
import QuestionCard from './QuestionCard';
import './QuizGame.css';

interface QuizGameProps {
    onFinish: (score: number, correct: number) => void;
    onCancel: () => void;
}

const QuizGame: React.FC<QuizGameProps> = ({ onFinish, onCancel }) => {
    const { t, i18n } = useTranslation();
    const [level, setLevel] = useState<Level | null>(null);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [showExplanation, setShowExplanation] = useState(false);

    const isCatalan = i18n.language === 'ca';

    const startLevel = (selectedLevel: Level) => {
        const q = QuizService.getQuestions(selectedLevel);
        setQuestions(q);
        setLevel(selectedLevel);
        setCurrentIndex(0);
        setScore(0);
        setCorrectCount(0);
        setSelectedOption(null);
        setShowExplanation(false);
    };

    const handleSelectOption = (index: number) => {
        if (selectedOption !== null) return;

        setSelectedOption(index);
        setShowExplanation(true);

        if (index === questions[currentIndex].correctAnswer) {
            setScore(prev => prev + questions[currentIndex].points);
            setCorrectCount(prev => prev + 1);
        }
    };

    const nextQuestion = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelectedOption(null);
            setShowExplanation(false);
        } else {
            onFinish(score, correctCount);
        }
    };

    if (!level) {
        return (
            <div className="game-lobby">
                <h2 className="lobby-title">{t('game.selectLevel')}</h2>
                <div className="level-grid">
                    <button className="level-card junior" onClick={() => startLevel(Level.JUNIOR)}>
                        <span className="level-icon">
                            <img src="/img/img-pato(1).webp" alt="Junior" className="level-img" />
                        </span>
                        <span className="level-name">Junior</span>
                        <span className="level-desc">{t('game.difficulty.easy')}</span>
                    </button>
                    <button className="level-card senior" onClick={() => startLevel(Level.SENIOR)}>
                        <span className="level-icon">
                            <img src="/img/img-pato(2).webp" alt="Senior" className="level-img" />
                        </span>
                        <span className="level-name">Senior</span>
                        <span className="level-desc">{t('game.difficulty.medium')}</span>
                    </button>
                    <button className="level-card executive" onClick={() => startLevel(Level.EXECUTIVE)}>
                        <span className="level-icon">
                            <img src="/img/img-pato(3).webp" alt="Executive" className="level-img" />
                        </span>
                        <span className="level-name">Executive</span>
                        <span className="level-desc">{t('game.difficulty.hard')}</span>
                    </button>
                </div>
                <button className="btn-text mt-8" onClick={onCancel}>
                    {t('common.cancel')}
                </button>
            </div>
        );
    }

    const currentQ = questions[currentIndex];
    const questionText = isCatalan && currentQ.textCA ? currentQ.textCA : currentQ.text;
    const questionOptions = isCatalan && currentQ.optionsCA ? currentQ.optionsCA : currentQ.options;
    const explanationText = isCatalan && currentQ.explanationCA ? currentQ.explanationCA : currentQ.explanation;

    return (
        <div className="game-active">
            <div className="game-header">
                <div className="game-progress">
                    <span className="progress-label">
                        {t('game.question')} {currentIndex + 1} / {questions.length}
                    </span>
                    <div className="progress-bar-bg">
                        <div
                            className="progress-bar-fill"
                            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                        ></div>
                    </div>
                </div>
                <div className="game-stats">
                    <span className="stat-item">XP: {score}</span>
                </div>
            </div>

            <QuestionCard
                question={questionText}
                options={questionOptions}
                selectedOption={selectedOption}
                correctAnswer={currentQ.correctAnswer}
                onSelectOption={handleSelectOption}
                disabled={selectedOption !== null}
            />

            {showExplanation && (
                <div className="explanation-section animate-fade-in">
                    <div className={`feedback-badge ${selectedOption === currentQ.correctAnswer ? 'correct' : 'wrong'}`}>
                        {selectedOption === currentQ.correctAnswer ? `✓ ${t('game.feedback.correct')}` : `✗ ${t('game.feedback.wrong')}`}
                    </div>
                    <p className="explanation-text">{explanationText}</p>
                    <button className="btn-primary" onClick={nextQuestion}>
                        {currentIndex === questions.length - 1 ? t('game.results.finish') : t('game.next')}
                    </button>
                </div>
            )}
        </div>
    );
};

export default QuizGame;
