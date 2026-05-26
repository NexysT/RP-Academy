'use client';

import { useState, useEffect, useCallback } from 'react';
import type { UserProgress, ExamProgress } from '@/types';

const DEFAULT_PROGRESS: UserProgress = {
  roleplay: {
    completed: false,
    score: 0,
    totalQuestions: 15,
    lastAttempt: null,
    bestScore: 0,
  },
  staffTeste: {
    completed: false,
    score: 0,
    totalQuestions: 20,
    lastAttempt: null,
    bestScore: 0,
  },
  staffExame: [],
};

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_PROGRESS);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('rp-platform-progress');
      if (stored) {
        setProgress(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
    setLoaded(true);
  }, []);

  const saveProgress = useCallback((newProgress: UserProgress) => {
    setProgress(newProgress);
    try {
      localStorage.setItem('rp-platform-progress', JSON.stringify(newProgress));
    } catch {
      // ignore
    }
  }, []);

  const updateRoleplayProgress = useCallback(
    (score: number) => {
      const updated: UserProgress = {
        ...progress,
        roleplay: {
          ...progress.roleplay,
          completed: true,
          score,
          lastAttempt: new Date().toISOString(),
          bestScore: Math.max(progress.roleplay.bestScore, score),
        },
      };
      saveProgress(updated);
    },
    [progress, saveProgress]
  );

  const updateStaffTesteProgress = useCallback(
    (score: number) => {
      const updated: UserProgress = {
        ...progress,
        staffTeste: {
          ...progress.staffTeste,
          completed: true,
          score,
          lastAttempt: new Date().toISOString(),
          bestScore: Math.max(progress.staffTeste.bestScore, score),
        },
      };
      saveProgress(updated);
    },
    [progress, saveProgress]
  );

  const addExamResult = useCallback(
    (result: ExamProgress) => {
      const updated: UserProgress = {
        ...progress,
        staffExame: [...progress.staffExame, result],
      };
      saveProgress(updated);
    },
    [progress, saveProgress]
  );

  const resetAll = useCallback(() => {
    saveProgress(DEFAULT_PROGRESS);
  }, [saveProgress]);

  const getTotalScore = useCallback(() => {
    const rp = progress.roleplay.bestScore;
    const st = progress.staffTeste.bestScore;
    const ex =
      progress.staffExame.length > 0
        ? Math.max(...progress.staffExame.map((e) => e.score))
        : 0;
    return rp + st + ex;
  }, [progress]);

  const getLevel = useCallback(() => {
    const total = getTotalScore();
    if (total >= 45) return { level: 5, title: 'Admin Sénior', color: '#f59e0b' };
    if (total >= 35) return { level: 4, title: 'Staff Experiente', color: '#6366f1' };
    if (total >= 25) return { level: 3, title: 'Staff Júnior', color: '#3b82f6' };
    if (total >= 15) return { level: 2, title: 'Jogador RP', color: '#10b981' };
    return { level: 1, title: 'Iniciante', color: '#8b91a8' };
  }, [getTotalScore]);

  return {
    progress,
    loaded,
    updateRoleplayProgress,
    updateStaffTesteProgress,
    addExamResult,
    resetAll,
    getTotalScore,
    getLevel,
  };
}
