
export enum Level {
  JUNIOR = 1,
  SENIOR = 2,
  EXECUTIVE = 3
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  points: number;
  category: string;
  type?: 'multiple' | 'journal';
}

export interface UserState {
  name: string;
  email: string;
  xp: number;
  level: Level;
  achievements: Achievement[];
  history: GameSession[];
  unlockedLevels: Level[];
  streak: number;
  lastPlayed?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface GameSession {
  id: string;
  level: Level;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  date: string;
}

export interface PGCAccount {
  code: string;
  name: string;
  definition: string;
  nature: 'Deudora' | 'Acreedora' | 'Mixta' | 'Variable';
  statement: 'Balance (PN)' | 'Balance (Activo NC)' | 'Balance (Activo C)' | 'Balance (Pasivo NC)' | 'Balance (Pasivo C)' | 'P&G' | 'ECPN';
  fiscalModel?: string;
  counterparts: string[];
  tips: string;
  debe: string;
  haber: string;
}
