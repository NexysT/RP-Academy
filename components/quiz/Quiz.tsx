'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy, ChevronRight, Lightbulb } from 'lucide-react';
import type { Question, QuizResult } from '@/types';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Badge } from '@/components/ui/Badge';
import { cn, getScoreLabel, getScoreColor, shuffleArray } from '@/lib/utils';

interface QuizProps {
  questions: Question[];
  onComplete: (score: number, results: QuizResult[]) => void;
  mode?: 'practice' | 'exam';
  randomize?: boolean;
  title?: string;
}

export function Quiz({ questions, onComplete, mode = 'practice', randomize = false, title }: QuizProps) {
  const [orderedQuestions] = useState(() => randomize ? shuffleArray(questions) : questions);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [finished, setFinished] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const current = orderedQuestions[currentIdx];
  const progress = ((currentIdx) / orderedQuestions.length) * 100;
  const isMultiple = current.multipleCorrect;
  const correctIds = current.options.filter((o) => o.correct).map((o) => o.id);

  const isCorrectAnswer = useCallback(
    (selected: string[]) => {
      const sorted = [...selected].sort();
      const correct = [...correctIds].sort();
      return sorted.length === correct.length && sorted.every((v, i) => v === correct[i]);
    },
    [correctIds]
  );

  const handleSelect = (optId: string) => {
    if (submitted) return;
    if (isMultiple) {
      setSelectedOptions((prev) =>
        prev.includes(optId) ? prev.filter((o) => o !== optId) : [...prev, optId]
      );
    } else {
      setSelectedOptions([optId]);
    }
  };

  const handleSubmit = () => {
    if (selectedOptions.length === 0) return;
    setSubmitted(true);
    if (mode === 'practice') setShowExplanation(false);
    const correct = isCorrectAnswer(selectedOptions);
    setResults((prev) => [
      ...prev,
      { questionId: current.id, selectedOptions, correct },
    ]);
  };

  const handleNext = () => {
    if (currentIdx + 1 >= orderedQuestions.length) {
      const totalCorrect = results.filter((r) => r.correct).length;
      const lastCorrect = isCorrectAnswer(selectedOptions);
      const finalScore = results.filter((r) => r.correct).length + (lastCorrect ? 1 : 0);
      onComplete(finalScore, [...results]);
      setFinished(true);
    } else {
      setCurrentIdx((i) => i + 1);
      setSelectedOptions([]);
      setSubmitted(false);
      setShowExplanation(false);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOptions([]);
    setSubmitted(false);
    setResults([]);
    setFinished(false);
    setShowExplanation(false);
  };

  const getOptionState = (optId: string): 'default' | 'selected' | 'correct' | 'wrong' | 'missed' => {
    if (!submitted) {
      return selectedOptions.includes(optId) ? 'selected' : 'default';
    }
    const isCorrect = correctIds.includes(optId);
    const isSelected = selectedOptions.includes(optId);
    if (isCorrect && isSelected) return 'correct';
    if (isSelected && !isCorrect) return 'wrong';
    if (isCorrect && !isSelected) return 'missed';
    return 'default';
  };

  const optionStyles = {
    default: 'border-white/8 bg-white/3 text-[var(--text-secondary)] hover:border-white/15 hover:bg-white/6 hover:text-[var(--text-primary)]',
    selected: 'border-indigo-500/50 bg-indigo-500/10 text-indigo-200',
    correct: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-200',
    wrong: 'border-red-500/50 bg-red-500/10 text-red-200',
    missed: 'border-emerald-500/30 bg-emerald-500/5 text-emerald-300/60',
  };

  const optionIcons = {
    correct: <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />,
    wrong: <XCircle size={16} className="text-red-400 shrink-0" />,
    missed: <CheckCircle2 size={16} className="text-emerald-400/50 shrink-0" />,
    default: null,
    selected: null,
  };

  if (finished) {
    const score = results.filter((r) => r.correct).length;
    const color = getScoreColor(score, orderedQuestions.length);
    const label = getScoreLabel(score, orderedQuestions.length);
    const pct = Math.round((score / orderedQuestions.length) * 100);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center py-16 px-6 text-center max-w-md mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
          className="w-24 h-24 rounded-full flex items-center justify-center mb-6"
          style={{ background: `${color}20`, border: `2px solid ${color}40` }}
        >
          <Trophy size={36} style={{ color }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-5xl font-bold mb-1" style={{ color }}>
            {score}/{orderedQuestions.length}
          </div>
          <div className="text-xl font-semibold text-[var(--text-primary)] mb-1">{label}</div>
          <div className="text-[var(--text-muted)] text-sm mb-6">{pct}% de respostas corretas</div>

          <div className="w-48 mx-auto mb-8">
            <ProgressBar value={score} max={orderedQuestions.length} color={color} height="lg" />
          </div>

          {mode === 'exam' && (
            <div className={cn(
              'mb-6 px-5 py-3 rounded-xl text-sm font-medium',
              pct >= 60
                ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-300'
                : 'bg-red-500/10 border border-red-500/20 text-red-300'
            )}>
              {pct >= 60 ? '✓ Aprovado — Exame concluído com sucesso' : '✗ Reprovado — Estuda mais e tenta novamente'}
            </div>
          )}

          <button
            onClick={handleRestart}
            className="flex items-center gap-2 mx-auto px-5 py-2.5 rounded-xl text-sm font-medium bg-white/6 border border-white/10 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/10 transition-all"
          >
            <RotateCcw size={14} />
            Tentar novamente
          </button>
        </motion.div>
      </motion.div>
    );
  }

  const answeredCorrectly = submitted && isCorrectAnswer(selectedOptions);

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {title && <span className="text-xs text-[var(--text-muted)] uppercase tracking-widest">{title}</span>}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-[var(--text-muted)]">
              {currentIdx + 1} / {orderedQuestions.length}
            </span>
            <Badge variant={answeredCorrectly ? 'success' : submitted ? 'error' : 'default'} size="sm">
              {results.filter((r) => r.correct).length} corretas
            </Badge>
          </div>
        </div>
        <ProgressBar
          value={currentIdx}
          max={orderedQuestions.length}
          color="var(--accent-primary)"
          animated={false}
        />
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <div className="glass rounded-2xl p-6 border border-white/8 mb-4">
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 w-8 h-8 rounded-xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center text-xs font-bold text-indigo-400">
                {currentIdx + 1}
              </div>
              <div>
                <h2 className="text-base font-semibold text-[var(--text-primary)] leading-snug">
                  {current.text}
                </h2>
                {isMultiple && (
                  <p className="text-xs text-[var(--text-muted)] mt-1">Pode ter múltiplas respostas corretas</p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {current.options.map((option, i) => {
                const state = getOptionState(option.id);
                const icon = optionIcons[state];
                const letters = ['A', 'B', 'C', 'D'];
                return (
                  <motion.button
                    key={option.id}
                    onClick={() => handleSelect(option.id)}
                    disabled={submitted}
                    whileHover={!submitted ? { scale: 1.01 } : {}}
                    whileTap={!submitted ? { scale: 0.99 } : {}}
                    className={cn(
                      'w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border text-sm text-left transition-all duration-200 cursor-pointer',
                      optionStyles[state],
                      submitted && 'cursor-default'
                    )}
                  >
                    <span className={cn(
                      'shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold border',
                      state === 'correct' ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400' :
                      state === 'wrong' ? 'bg-red-500/20 border-red-500/30 text-red-400' :
                      state === 'selected' ? 'bg-indigo-500/20 border-indigo-500/30 text-indigo-400' :
                      'bg-white/5 border-white/10 text-[var(--text-muted)]'
                    )}>
                      {letters[i]}
                    </span>
                    <span className="flex-1">{option.text}</span>
                    {submitted && icon}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Explanation (practice mode) */}
          {submitted && mode === 'practice' && current.explanation && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                'rounded-xl border px-5 py-4 mb-4 text-sm',
                answeredCorrectly
                  ? 'bg-emerald-500/8 border-emerald-500/20 text-emerald-200'
                  : 'bg-amber-500/8 border-amber-500/20 text-amber-200'
              )}
            >
              <div className="flex items-center gap-2 font-semibold mb-2">
                <Lightbulb size={14} />
                {answeredCorrectly ? 'Correto!' : 'Resposta incorreta'}
              </div>
              <p className="leading-relaxed text-[0.82rem] opacity-90">{current.explanation}</p>
            </motion.div>
          )}

          {/* Actions */}
          <div className="flex justify-between items-center">
            <div />
            {!submitted ? (
              <motion.button
                onClick={handleSubmit}
                disabled={selectedOptions.length === 0}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  'flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200',
                  selectedOptions.length > 0
                    ? 'bg-indigo-500 text-white hover:bg-indigo-400 shadow-lg shadow-indigo-500/25'
                    : 'bg-white/5 text-[var(--text-muted)] cursor-not-allowed'
                )}
              >
                Confirmar
                <ChevronRight size={15} />
              </motion.button>
            ) : (
              <motion.button
                onClick={handleNext}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-indigo-500 text-white hover:bg-indigo-400 shadow-lg shadow-indigo-500/25 transition-all"
              >
                {currentIdx + 1 >= orderedQuestions.length ? 'Ver resultado' : 'Próxima'}
                <ArrowRight size={15} />
              </motion.button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
