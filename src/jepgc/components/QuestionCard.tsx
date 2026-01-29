import React, { useState } from 'react';
import './QuestionCard.css';
import AccountCodeLink from './AccountCodeLink';
import AccountModal from './AccountModal';

interface QuestionCardProps {
    question: string;
    options: string[];
    selectedOption: number | null;
    correctAnswer: number;
    onSelectOption: (index: number) => void;
    disabled: boolean;
    hint?: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
    question,
    options,
    selectedOption,
    correctAnswer,
    onSelectOption,
    disabled,
    hint
}) => {
    const [selectedAccountCode, setSelectedAccountCode] = useState<string | null>(null);

    const handleAccountClick = (accountCode: string) => {
        setSelectedAccountCode(accountCode);
    };

    const handleCloseModal = () => {
        setSelectedAccountCode(null);
    };

    return (
        <div className="question-card">
            <h3 className="question-text">
                <AccountCodeLink text={question} onAccountClick={handleAccountClick} />
            </h3>
            <div className="options-grid">
                {options.map((option, index) => {
                    let statusClass = '';
                    if (selectedOption !== null) {
                        if (index === correctAnswer) statusClass = 'correct';
                        else if (index === selectedOption) statusClass = 'wrong';
                        else statusClass = 'disabled';
                    }

                    return (
                        <button
                            key={index}
                            className={`option-button ${statusClass}`}
                            onClick={() => onSelectOption(index)}
                            disabled={disabled}
                        >
                            <span className="option-index">{String.fromCharCode(65 + index)}</span>
                            <span className="option-label">{option}</span>
                        </button>
                    );
                })}
            </div>
            {hint && selectedOption === null && (
                <div className="hint-section">
                    <span className="hint-icon">💡</span>
                    <span className="hint-text">{hint}</span>
                </div>
            )}

            {selectedAccountCode && (
                <AccountModal
                    accountCode={selectedAccountCode}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default QuestionCard;
