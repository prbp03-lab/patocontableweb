import quizData from '../data/quiz_engine.json';
import { Level, Question } from '../types';

export class QuizService {
    static getQuestions(level: Level, count: number = 5): Question[] {
        const levelKey = level.toString();
        const questions = (quizData.levels as any)[levelKey] || [];

        // Mezclar preguntas
        const shuffled = [...questions].sort(() => 0.5 - Math.random());

        // Seleccionar las primeras 'count'
        return shuffled.slice(0, count).map((q: any) => ({
            ...q,
            correctAnswer: q.answer, // Adaptar campo 'answer' a 'correctAnswer'
            explanation: q.explanation || `La respuesta correcta es: ${q.options[q.answer]}`
        }));
    }
}
