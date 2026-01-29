export enum Level {
    JUNIOR = 1,
    SENIOR = 2,
    EXECUTIVE = 3
}

export interface Question {
    id: string;
    text: string;
    textCA?: string;
    options: string[];
    optionsCA?: string[];
    correctAnswer: number;
    explanation: string;
    explanationCA?: string;
    hint?: string;
    hintCA?: string;
    points: number;
    category: string;
}

export interface GameSession {
    level: Level;
    score: number;
    correctAnswers: number;
    totalQuestions: number;
    date: string;
}
