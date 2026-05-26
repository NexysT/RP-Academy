import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat('pt-PT', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date));
}

export function getScoreLabel(score: number, total: number): string {
  const pct = (score / total) * 100;
  if (pct >= 90) return 'Excelente';
  if (pct >= 75) return 'Muito Bom';
  if (pct >= 60) return 'Bom';
  if (pct >= 50) return 'Suficiente';
  return 'Insuficiente';
}

export function getScoreColor(score: number, total: number): string {
  const pct = (score / total) * 100;
  if (pct >= 90) return '#10b981';
  if (pct >= 75) return '#6366f1';
  if (pct >= 60) return '#3b82f6';
  if (pct >= 50) return '#f59e0b';
  return '#ef4444';
}

export function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}
