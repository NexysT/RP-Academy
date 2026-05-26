export interface Question {
  id: number;
  text: string;
  options: Option[];
  explanation?: string;
  multipleCorrect?: boolean;
}

export interface Option {
  id: string;
  text: string;
  correct: boolean;
}

export interface QuizResult {
  questionId: number;
  selectedOptions: string[];
  correct: boolean;
  timeSpent?: number;
}

export interface UserProgress {
  roleplay: ModuleProgress;
  staffTeste: ModuleProgress;
  staffExame: ExamProgress[];
}

export interface ModuleProgress {
  completed: boolean;
  score: number;
  totalQuestions: number;
  lastAttempt: string | null;
  bestScore: number;
}

export interface ExamProgress {
  date: string;
  score: number;
  total: number;
  passed: boolean;
}

export type CorpSection = 'guias' | 'procedimentos' | 'codigos' | 'hierarquias' | 'abordagens' | 'situacoes';

export type Corp =
  | 'policia'
  | 'inem'
  | 'militar'
  | 'policia-militar'
  | 'gnr'
  | 'psp'
  | 'estrangeiro';

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  badge?: string;
  children?: NavItem[];
}

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
  id: string;
  type: ToastType;
  message: string;
  duration?: number;
}
