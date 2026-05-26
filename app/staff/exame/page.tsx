'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText, Timer, Trophy, AlertTriangle, CheckCircle2,
  XCircle, ChevronRight, ArrowRight, RotateCcw, Lock, Play
} from 'lucide-react';
import { staffExameQuestions } from '@/data/questions-staff-exame';
import { rpQuestions } from '@/data/questions-rp';
import { useProgress } from '@/hooks/useProgress';
import { useToast } from '@/hooks/useToast';
import { Badge } from '@/components/ui/Badge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { cn, shuffleArray, getScoreLabel, getScoreColor } from '@/lib/utils';
import type { Question, QuizResult } from '@/types';

const EXAM_DURATION = 600; // 10 minutes

const allExamQuestions: Question[] = [
  ...staffExameQuestions,
  ...rpQuestions.slice(0, 5).map((q) => ({ ...q, id: q.id + 100 })),
];

function formatTime(secs: number) {
  const m = Math.floor(secs / 60).toString().padStart(2, '0');
  const s = (secs % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

export default function StaffExamePage() {
  const { addExamResult } = useProgress();
  const { addToast } = useToast();

  const [started, setStarted] = useState(false);
  const [questions] = useState(() => shuffleArray(allExamQuestions).slice(0, 15));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const current = questions[currentIdx];
  const correctIds = current?.options.filter((o) => o.correct).map((o) => o.id) ?? [];

  const isCorrectAnswer = useCallback(
    (selected: string[]) => {
      const sorted = [...selected].sort();
      const correct = [...correctIds].sort();
      return sorted.length === correct.length && sorted.every((v, i) => v === correct[i]);
    },
    [correctIds]
  );

  const finishExam = useCallback((currentResults: QuizResult[], timedOut = false) => {
    if (timerRef.current) clearInterval(timerRef.current);
    const score = currentResults.filter((r) => r.correct).length;
    const passed = score / 15 >= 0.6;
    setFinished(true);
    addExamResult({ date: new Date().toISOString(), score, total: 15, passed });
    if (timedOut) addToast('Tempo esgotado! Exame submetido automaticamente.', 'warning');
    else if (passed) addToast(`Aprovado! ${score}/15`, 'success');
    else addToast(`Reprovado — ${score}/15. Tenta novamente.`, 'error');
  }, [addExamResult, addToast]);

  useEffect(() => {
    if (!started || finished) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          const finalResults = [...results];
          if (selectedOptions.length > 0) {
            finalResults.push({
              questionId: current.id,
              selectedOptions,
              correct: isCorrectAnswer(selectedOptions),
            });
          }
          finishExam(finalResults, true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [started, finished, results, selectedOptions, current, isCorrectAnswer, finishExam]);

  const handleSelect = (optId: string) => {
    setSelectedOptions((prev) =>
      prev.includes(optId) ? prev.filter((o) => o !== optId) : [...prev, optId]
    );
  };

  const handleNext = () => {
    const correct = isCorrectAnswer(selectedOptions);
    const newResults = [...results, { questionId: current.id, selectedOptions, correct }];
    setResults(newResults);

    if (currentIdx + 1 >= questions.length) {
      finishExam(newResults);
    } else {
      setCurrentIdx((i) => i + 1);
      setSelectedOptions([]);
    }
  };

  const handleRestart = () => {
    setStarted(false);
    setCurrentIdx(0);
    setSelectedOptions([]);
    setResults([]);
    setFinished(false);
    setTimeLeft(EXAM_DURATION);
  };

  const timeColor = timeLeft < 120 ? '#ef4444' : timeLeft < 300 ? '#f59e0b' : '#10b981';
  const letters = ['A', 'B', 'C', 'D'];

  // Start screen
  if (!started) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-radial from-amber-500/4 via-transparent to-transparent" />
          <div className="dot-grid absolute inset-0 opacity-30" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 w-full max-w-md"
        >
          <div className="glass rounded-3xl border border-white/10 p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/15 border border-amber-500/20 flex items-center justify-center mx-auto mb-6">
              <FileText size={28} className="text-amber-400" />
            </div>

            <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Exame Staff</h1>
            <p className="text-sm text-[var(--text-secondary)] mb-8 leading-relaxed">
              Exame oficial de avaliação. 15 questões difíceis combinando regras RP e conhecimento de staff. Sem feedback durante o exame — só nota final.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { label: 'Questões', value: '15', icon: FileText, color: '#f59e0b' },
                { label: 'Tempo', value: '10m', icon: Timer, color: '#6366f1' },
                { label: 'Mínimo', value: '60%', icon: Trophy, color: '#10b981' },
              ].map((s) => (
                <div key={s.label} className="glass rounded-xl p-3 border border-white/6">
                  <s.icon size={14} style={{ color: s.color }} className="mx-auto mb-1.5" />
                  <div className="text-lg font-bold" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mb-6 rounded-xl border border-amber-500/20 bg-amber-500/8 p-4">
              <div className="flex items-start gap-2 text-left">
                <AlertTriangle size={14} className="text-amber-400 mt-0.5 shrink-0" />
                <p className="text-xs text-amber-300/90 leading-relaxed">
                  Não há feedback durante o exame. As respostas corretas só são reveladas na nota final. Certifica-te que estás preparado antes de começar.
                </p>
              </div>
            </div>

            <motion.button
              onClick={() => setStarted(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-amber-500 text-black text-sm font-bold hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/25"
            >
              <Play size={16} />
              Iniciar Exame
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Results screen
  if (finished) {
    const score = results.filter((r) => r.correct).length;
    const passed = score / 15 >= 0.6;
    const color = getScoreColor(score, 15);
    const pct = Math.round((score / 15) * 100);

    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-lg"
        >
          <div className="glass rounded-3xl border border-white/10 p-8">
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: `${color}20`, border: `2px solid ${color}40` }}
              >
                <Trophy size={32} style={{ color }} />
              </motion.div>
              <div className="text-4xl font-bold mb-1" style={{ color }}>{score}/15</div>
              <div className="text-lg font-semibold text-[var(--text-primary)] mb-1">{getScoreLabel(score, 15)}</div>
              <div className="text-[var(--text-muted)] text-sm mb-4">{pct}% de acerto</div>

              <div className="w-40 mx-auto mb-5">
                <ProgressBar value={score} max={15} color={color} height="lg" />
              </div>

              <div className={cn(
                'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold',
                passed
                  ? 'bg-emerald-500/12 border border-emerald-500/20 text-emerald-300'
                  : 'bg-red-500/12 border border-red-500/20 text-red-300'
              )}>
                {passed ? <CheckCircle2 size={15} /> : <XCircle size={15} />}
                {passed ? 'Aprovado — Parabéns!' : 'Reprovado — Continua a estudar'}
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <div className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-3">Detalhe por questão</div>
              <div className="grid grid-cols-5 gap-2">
                {results.map((r, i) => (
                  <div
                    key={i}
                    className={cn(
                      'aspect-square rounded-xl flex items-center justify-center text-xs font-bold',
                      r.correct
                        ? 'bg-emerald-500/15 border border-emerald-500/25 text-emerald-400'
                        : 'bg-red-500/15 border border-red-500/25 text-red-400'
                    )}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleRestart}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium bg-white/6 border border-white/10 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/10 transition-all"
            >
              <RotateCcw size={14} />
              Repetir Exame
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Exam in progress
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="dot-grid absolute inset-0 opacity-20" />
      </div>

      {/* Sticky exam bar */}
      <div className="sticky top-0 z-30 glass border-b border-white/6 px-6 py-3">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Lock size={13} className="text-amber-400" />
            <span className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider">Exame Staff</span>
          </div>
          <div className="flex-1">
            <ProgressBar value={currentIdx} max={questions.length} color="#f59e0b" animated={false} />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-[var(--text-muted)]">{currentIdx + 1}/{questions.length}</span>
            <div
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold"
              style={{ color: timeColor, background: `${timeColor}15`, border: `1px solid ${timeColor}30` }}
            >
              <Timer size={12} />
              {formatTime(timeLeft)}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-6 py-10 max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="glass rounded-2xl p-6 border border-white/8 mb-4">
              <div className="flex items-start gap-4 mb-6">
                <div className="shrink-0 w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/20 flex items-center justify-center text-xs font-bold text-amber-400">
                  {currentIdx + 1}
                </div>
                <h2 className="text-base font-semibold text-[var(--text-primary)] leading-snug pt-0.5">
                  {current.text}
                </h2>
              </div>

              <div className="flex flex-col gap-2">
                {current.options.map((option, i) => {
                  const isSelected = selectedOptions.includes(option.id);
                  return (
                    <motion.button
                      key={option.id}
                      onClick={() => handleSelect(option.id)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className={cn(
                        'w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border text-sm text-left transition-all duration-200 cursor-pointer',
                        isSelected
                          ? 'border-amber-500/50 bg-amber-500/10 text-amber-200'
                          : 'border-white/8 bg-white/3 text-[var(--text-secondary)] hover:border-white/15 hover:bg-white/6 hover:text-[var(--text-primary)]'
                      )}
                    >
                      <span className={cn(
                        'shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold border',
                        isSelected
                          ? 'bg-amber-500/20 border-amber-500/30 text-amber-400'
                          : 'bg-white/5 border-white/10 text-[var(--text-muted)]'
                      )}>
                        {letters[i]}
                      </span>
                      <span className="flex-1">{option.text}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-end">
              <motion.button
                onClick={handleNext}
                disabled={selectedOptions.length === 0}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  'flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200',
                  selectedOptions.length > 0
                    ? 'bg-amber-500 text-black hover:bg-amber-400 shadow-lg shadow-amber-500/25'
                    : 'bg-white/5 text-[var(--text-muted)] cursor-not-allowed'
                )}
              >
                {currentIdx + 1 >= questions.length ? 'Submeter Exame' : 'Próxima'}
                <ArrowRight size={15} />
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
