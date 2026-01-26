// PGC Types
export interface PGCAccount {
    code: string;
    name: string;
    nameCA?: string;
    nature: 'Deudora' | 'Acreedora' | 'Variable';
    financialStatement: 'Balance' | 'PyG' | 'ECPN';
    group: number;
    subgroup: string;
    fiscalModels?: string[];
    commonCounterparts?: string[];
    journalExample?: {
        debe: string;
        haber: string;
        description: string;
        descriptionCA?: string;
    };
    description?: string;
    descriptionCA?: string;
}

// Fiscal Calendar Types
export type DeclarationType = 'Trimestral' | 'Anual';
export type FiscalCategory = 'IVA' | 'IRPF' | 'Sociedades' | 'Informativa';

export interface FiscalDeadline {
    quarter?: 1 | 2 | 3 | 4;
    month: number;
    dayStart: number;
    dayEnd: number;
}

export interface FiscalDeclaration {
    model: string;
    name: string;
    nameCA?: string;
    type: DeclarationType;
    category: FiscalCategory;
    deadlines: FiscalDeadline[];
    accounts: string[];
    description: string;
    descriptionCA?: string;
}

// Profile Types
export interface Experience {
    year: string;
    role: string;
    roleCA?: string;
    company: string;
    description: string;
    descriptionCA?: string;
}

export interface Education {
    year: string;
    title: string;
    titleCA?: string;
    institution: string;
}

export interface Language {
    name: string;
    nameCA?: string;
    level: string;
    levelCA?: string;
}

// Game Types (from JEPGC)
export interface QuizQuestion {
    id: string;
    text: string;
    textCA?: string;
    options: string[];
    optionsCA?: string[];
    answer: number;
    points: number;
    explanation?: string;
    explanationCA?: string;
}

export interface GameLevel {
    level: number;
    name: string;
    nameCA?: string;
    questions: QuizQuestion[];
    minScore: number;
}

export interface GameProgress {
    currentLevel: number;
    score: number;
    completedQuestions: string[];
    achievements: string[];
}

// UI Types
export interface Tab {
    id: string;
    label: string;
    icon?: string;
}

export interface FilterOption {
    value: string;
    label: string;
}
