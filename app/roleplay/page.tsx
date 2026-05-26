'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Info, Zap, Search, X, ChevronDown, ExternalLink } from 'lucide-react';
import { Quiz } from '@/components/quiz/Quiz';
import { rpQuestions } from '@/data/questions-rp';
import { glossarioRP, type GlossarioEntry } from '@/data/glossario-rp';
import { useProgress } from '@/hooks/useProgress';
import { useToast } from '@/hooks/useToast';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import type { QuizResult } from '@/types';

/* ─── helpers ─── */
const categoryConfig = {
  proibido:    { label: 'Proibido',    color: '#ef4444', bg: 'bg-red-500/10 border-red-500/20' },
  obrigatorio: { label: 'Obrigatório', color: '#10b981', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  conceito:    { label: 'Conceito',    color: '#6366f1', bg: 'bg-indigo-500/10 border-indigo-500/20' },
  personagem:  { label: 'Personagem',  color: '#a78bfa', bg: 'bg-purple-500/10 border-purple-500/20' },
  crime:       { label: 'Crime',       color: '#f59e0b', bg: 'bg-amber-500/10 border-amber-500/20' },
  conduta:     { label: 'Conduta',     color: '#06b6d4', bg: 'bg-cyan-500/10 border-cyan-500/20' },
};

const ALL_CAT = 'todos';
const CATS = [ALL_CAT, ...Object.keys(categoryConfig)] as const;

function GlossaryEntry({ entry }: { entry: GlossarioEntry }) {
  const [open, setOpen] = useState(false);
  const cat = categoryConfig[entry.category];

  return (
    <motion.div layout className="glass rounded-2xl border border-white/7 hover:border-white/11 transition-all duration-200 overflow-hidden">
      <button onClick={() => setOpen(v => !v)} className="w-full text-left px-5 py-4">
        <div className="flex items-start gap-3">
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}
            className="shrink-0 mt-0.5 w-5 h-5 rounded-md flex items-center justify-center bg-white/5">
            <ChevronDown size={12} className="text-[var(--text-muted)]" />
          </motion.div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-sm font-semibold text-[var(--text-primary)]">{entry.term}</span>
              <span className={cn('text-[10px] font-semibold px-2 py-0.5 rounded-md border', cat.bg)}
                style={{ color: cat.color }}>{cat.label}</span>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">{entry.shortDef}</p>
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="overflow-hidden">
            <div className="mx-5 mb-5 pt-4 border-t border-white/6 space-y-4">
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                {entry.fullDef}
              </p>
              {entry.examples && entry.examples.length > 0 && (
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-semibold mb-2">
                    Exemplos
                  </div>
                  <ul className="space-y-1.5">
                    {entry.examples.map((ex, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <span className="shrink-0 w-1.5 h-1.5 rounded-full mt-1.5" style={{ background: cat.color }} />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {entry.seeAlso && entry.seeAlso.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-semibold">Ver também:</span>
                  {entry.seeAlso.map(ref => {
                    const found = glossarioRP.find(g => g.id === ref);
                    return found ? (
                      <span key={ref} className="text-[10px] px-2 py-0.5 rounded-md text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
                        {found.term.split(' —')[0]}
                      </span>
                    ) : null;
                  })}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Main Page ─── */
type Tab = 'glossario' | 'quiz';

export default function RoleplayPage() {
  const { updateRoleplayProgress } = useProgress();
  const { addToast } = useToast();
  const [tab, setTab] = useState<Tab>('glossario');
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>(ALL_CAT);
  const [quizKey, setQuizKey] = useState(0);

  const filtered = useMemo(() => {
    return glossarioRP.filter(e => {
      const matchCat = activeCategory === ALL_CAT || e.category === activeCategory;
      const q = search.toLowerCase();
      const matchSearch = !q || e.term.toLowerCase().includes(q) || e.shortDef.toLowerCase().includes(q) || e.fullDef.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [search, activeCategory]);

  /* randomise 15 from 50 each time quizKey changes */
  const quizQuestions = useMemo(() => {
    const shuffled = [...rpQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 15);
  }, [quizKey]);

  const handleComplete = (score: number, _r: QuizResult[]) => {
    updateRoleplayProgress(score);
    const pct = Math.round((score / 15) * 100);
    if (pct >= 80)      addToast(`Excelente! ${score}/15 corretas`, 'success');
    else if (pct >= 60) addToast(`Bom resultado: ${score}/15`, 'info');
    else                addToast(`${score}/15 — Revê o glossário e tenta novamente`, 'warning');
  };

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/4 blur-[100px]" />
        <div className="dot-grid absolute inset-0 opacity-30" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="px-6 lg:px-10 pt-10 pb-6 border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center">
                <BookOpen size={18} className="text-emerald-400" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[var(--text-primary)]">Sistema Roleplay</h1>
                <p className="text-xs text-[var(--text-muted)]">Glossário completo + Quiz interativo com 50 questões</p>
              </div>
            </motion.div>

            {/* Tabs */}
            <div className="flex gap-1 p-1 glass rounded-xl border border-white/8 w-fit">
              {(['glossario', 'quiz'] as Tab[]).map(t => (
                <button key={t} onClick={() => setTab(t)}
                  className={cn(
                    'px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    tab === t
                      ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/20'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
                  )}>
                  {t === 'glossario' ? '📖 Glossário RP' : '🎯 Quiz'}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 lg:px-10 py-8 max-w-6xl mx-auto">
          <AnimatePresence mode="wait">

            {/* GLOSSÁRIO */}
            {tab === 'glossario' && (
              <motion.div key="glossario" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }}>

                {/* Search + filters */}
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <div className="relative flex-1">
                    <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                    <input
                      type="text" value={search} onChange={e => setSearch(e.target.value)}
                      placeholder="Pesquisar regra ou termo…"
                      className="w-full bg-white/4 border border-white/8 rounded-xl pl-10 pr-10 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-emerald-500/40 focus:bg-white/6 transition-all"
                    />
                    {search && (
                      <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-secondary)]">
                        <X size={13} />
                      </button>
                    )}
                  </div>
                  <div className="flex gap-1.5 flex-wrap">
                    {CATS.map(cat => {
                      const active = activeCategory === cat;
                      const conf = cat !== ALL_CAT ? categoryConfig[cat as keyof typeof categoryConfig] : null;
                      return (
                        <button key={cat} onClick={() => setActiveCategory(cat)}
                          className={cn(
                            'px-3 py-1.5 rounded-xl text-xs font-medium border transition-all duration-200',
                            active
                              ? 'border-opacity-40 bg-opacity-15'
                              : 'border-white/8 bg-white/3 text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:bg-white/5'
                          )}
                          style={active && conf ? { color: conf.color, background: `${conf.color}12`, borderColor: `${conf.color}30` }
                            : active ? { color: 'var(--text-primary)', background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.15)' }
                            : {}}>
                          {cat === ALL_CAT ? 'Todos' : categoryConfig[cat as keyof typeof categoryConfig].label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Results count */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-[var(--text-muted)]">
                    {filtered.length} {filtered.length === 1 ? 'entrada' : 'entradas'}
                    {search && ` para "${search}"`}
                  </span>
                  <button onClick={() => { setSearch(''); setActiveCategory(ALL_CAT); }}
                    className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors">
                    Limpar filtros
                  </button>
                </div>

                {filtered.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="w-12 h-12 rounded-2xl bg-white/4 flex items-center justify-center mx-auto mb-3">
                      <Search size={20} className="text-[var(--text-muted)]" />
                    </div>
                    <p className="text-sm text-[var(--text-muted)]">Nenhuma entrada encontrada</p>
                    <button onClick={() => { setSearch(''); setActiveCategory(ALL_CAT); }}
                      className="mt-3 text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
                      Limpar filtros
                    </button>
                  </div>
                ) : (
                  <motion.div layout className="space-y-2.5">
                    <AnimatePresence mode="popLayout">
                      {filtered.map(entry => (
                        <motion.div key={entry.id} layout
                          initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.15 }}>
                          <GlossaryEntry entry={entry} />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* QUIZ */}
            {tab === 'quiz' && (
              <motion.div key="quiz" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }}>

                <div className="mb-6 glass rounded-xl p-4 border border-emerald-500/15 flex items-start gap-3">
                  <Info size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">Modo Prática</strong> — 15 questões aleatórias de um banco de 50.
                      Cada resposta é corrigida imediatamente com explicação.
                    </p>
                  </div>
                  <button onClick={() => setQuizKey(k => k + 1)}
                    className="shrink-0 text-xs text-emerald-400 hover:text-emerald-300 border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap">
                    Nova seleção
                  </button>
                </div>

                <Quiz key={quizKey} questions={quizQuestions} onComplete={handleComplete}
                  mode="practice" title="Regras Roleplay" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
