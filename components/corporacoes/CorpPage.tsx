'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, ClipboardList, Hash, Users, Target, Zap, ChevronRight,
} from 'lucide-react';
import { type CorpData } from '@/data/corporacoes';
import { ExpandableCard } from '@/components/ui/ExpandableCard';
import { cn } from '@/lib/utils';

interface CorpPageProps { corp: CorpData; }

type CorpSection = 'guias' | 'procedimentos' | 'codigos' | 'hierarquias' | 'abordagens' | 'situacoes';

const sections: { id: CorpSection; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
  { id: 'guias',        label: 'Guias',          icon: BookOpen },
  { id: 'procedimentos',label: 'Procedimentos',  icon: ClipboardList },
  { id: 'codigos',      label: 'Códigos',        icon: Hash },
  { id: 'hierarquias',  label: 'Hierarquias',    icon: Users },
  { id: 'abordagens',   label: 'Abordagens RP',  icon: Target },
  { id: 'situacoes',    label: 'Situações Reais', icon: Zap },
];

const severityConfig = {
  baixo:   { label: 'Baixo',    text: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  medio:   { label: 'Médio',   text: 'text-amber-400',   bg: 'bg-amber-500/10 border-amber-500/20'   },
  alto:    { label: 'Alto',    text: 'text-orange-400',  bg: 'bg-orange-500/10 border-orange-500/20' },
  critico: { label: 'Crítico', text: 'text-red-400',     bg: 'bg-red-500/10 border-red-500/20'       },
};

export function CorpPage({ corp }: CorpPageProps) {
  const [activeSection, setActiveSection] = useState<CorpSection>('guias');
  const [expandedCode, setExpandedCode] = useState<string | null>(null);

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] blur-[120px] opacity-50"
          style={{ background: `radial-gradient(circle, ${corp.accentColor}08 0%, transparent 70%)` }} />
        <div className="dot-grid absolute inset-0 opacity-25" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="px-6 lg:px-10 pt-10 pb-6 border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 border"
                style={{ background: `${corp.accentColor}15`, borderColor: `${corp.accentColor}30` }}>
                {corp.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="inline-flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded"
                    style={{ color: corp.accentColor, background: `${corp.accentColor}18` }}>
                    {corp.shortName}
                  </span>
                </div>
                <h1 className="text-xl font-bold text-[var(--text-primary)] mb-1">{corp.name}</h1>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-2xl">{corp.description}</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="px-6 lg:px-10 py-6 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[200px_1fr] gap-8">

            {/* Sidebar nav */}
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }} className="lg:sticky lg:top-6 self-start">
              <div className="glass rounded-2xl border border-white/8 overflow-hidden">
                <div className="px-4 py-3 border-b border-white/6">
                  <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-semibold">Secções</span>
                </div>
                <nav className="p-2">
                  {sections.map((s) => {
                    const active = activeSection === s.id;
                    return (
                      <button key={s.id} onClick={() => setActiveSection(s.id)}
                        className={cn(
                          'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 text-left',
                          !active && 'text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:bg-white/4'
                        )}
                        style={active ? {
                          background: `${corp.accentColor}12`,
                          color: corp.accentColor,
                        } : {}}>
                        <s.icon size={13} />
                        {s.label}
                        {active && <ChevronRight size={11} className="ml-auto" style={{ color: corp.accentColor }} />}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <AnimatePresence mode="wait">
                <motion.div key={activeSection}
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.16 }}>

                  {/* Guias / Procedimentos / Abordagens / Situações */}
                  {(['guias','procedimentos','abordagens','situacoes'] as CorpSection[]).includes(activeSection) && (
                    <div className="space-y-3">
                      {(corp.sections[activeSection] as { title: string; shortDesc: string; content: string; tags?: string[] }[]).map((item, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                          <ExpandableCard
                            title={item.title}
                            shortDesc={item.shortDesc}
                            accentColor={corp.accentColor}
                            tags={item.tags}>
                            {item.content}
                          </ExpandableCard>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Códigos */}
                  {activeSection === 'codigos' && (
                    <div className="space-y-2">
                      {corp.sections.codigos.map((c, i) => {
                        const sev = c.severity ? severityConfig[c.severity] : severityConfig.baixo;
                        const isOpen = expandedCode === `${i}`;
                        return (
                          <motion.button key={i} onClick={() => setExpandedCode(isOpen ? null : `${i}`)}
                            initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.03 }}
                            className="w-full glass rounded-xl border border-white/7 hover:border-white/12 transition-all duration-200 text-left overflow-hidden">
                            <div className="px-4 py-3 flex items-center gap-4">
                              <div className="shrink-0 font-mono text-sm font-bold px-3 py-1.5 rounded-lg"
                                style={{ color: corp.accentColor, background: `${corp.accentColor}15`, border: `1px solid ${corp.accentColor}25` }}>
                                {c.code}
                              </div>
                              <span className="flex-1 text-sm text-[var(--text-secondary)]">{c.description}</span>
                              <div className="flex items-center gap-2">
                                {c.severity && (
                                  <span className={cn('text-[10px] font-semibold px-2 py-0.5 rounded border shrink-0', sev.bg, sev.text)}>
                                    {sev.label}
                                  </span>
                                )}
                                {c.detail && (
                                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                                    <ChevronRight size={12} className="text-[var(--text-muted)] rotate-90" />
                                  </motion.div>
                                )}
                              </div>
                            </div>
                            <AnimatePresence initial={false}>
                              {isOpen && c.detail && (
                                <motion.div initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}>
                                  <div className="px-4 pb-3 pt-1 border-t border-white/5 text-xs text-[var(--text-muted)] leading-relaxed">
                                    {c.detail}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.button>
                        );
                      })}
                    </div>
                  )}

                  {/* Hierarquias */}
                  {activeSection === 'hierarquias' && (
                    <div>
                      {/* Group by category */}
                      {(() => {
                        const grouped: Record<string, typeof corp.sections.hierarquias> = {};
                        [...corp.sections.hierarquias].reverse().forEach((h) => {
                          if (!grouped[h.category]) grouped[h.category] = [];
                          grouped[h.category].push(h);
                        });
                        const cats = Object.keys(grouped);
                        return cats.map((cat) => (
                          <div key={cat} className="mb-6">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="h-px flex-1" style={{ background: `${corp.accentColor}20` }} />
                              <span className="text-[10px] font-bold uppercase tracking-widest px-3"
                                style={{ color: corp.accentColor }}>{cat}</span>
                              <div className="h-px flex-1" style={{ background: `${corp.accentColor}20` }} />
                            </div>
                            <div className="space-y-2">
                              {grouped[cat].map((h, i) => {
                                const isTop = h.rank === Math.max(...corp.sections.hierarquias.map(x => x.rank));
                                return (
                                  <motion.div key={h.rank}
                                    initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.04 }}
                                    className="glass rounded-xl border px-4 py-3.5 flex items-start gap-4 hover:border-white/12 transition-colors"
                                    style={isTop ? { borderColor: `${corp.accentColor}35` } : { borderColor: 'rgba(255,255,255,0.07)' }}>
                                    <div className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold"
                                      style={{
                                        background: isTop ? `${corp.accentColor}20` : 'rgba(255,255,255,0.04)',
                                        color: isTop ? corp.accentColor : 'var(--text-muted)',
                                        border: `1px solid ${isTop ? corp.accentColor + '30' : 'rgba(255,255,255,0.08)'}`,
                                      }}>
                                      {h.rank}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-2 flex-wrap mb-1">
                                        <span className="font-semibold text-sm text-[var(--text-primary)]">{h.title}</span>
                                        <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded"
                                          style={{ color: corp.accentColor, background: `${corp.accentColor}15` }}>
                                          {h.abbreviation}
                                        </span>
                                        {isTop && (
                                          <span className="text-[10px] font-semibold uppercase tracking-wider ml-auto"
                                            style={{ color: corp.accentColor }}>Comando</span>
                                        )}
                                      </div>
                                      <p className="text-xs text-[var(--text-muted)] leading-relaxed">{h.description}</p>
                                    </div>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </div>
                        ));
                      })()}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
