'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, Shield, Building2, ChevronRight, Zap, Trophy, Target, Users } from 'lucide-react';
import { useProgress } from '@/hooks/useProgress';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Badge } from '@/components/ui/Badge';
import { getScoreLabel, getScoreColor } from '@/lib/utils';

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const cards = [
  {
    title: 'Corporações',
    description: 'Guias, hierarquias, códigos e procedimentos para PSP, GNR, INEM, Militar e mais.',
    icon: Building2,
    href: '/corporacoes/psp',
    color: '#6366f1',
    glow: 'rgba(99,102,241,0.15)',
    badge: '7 corporações',
  },
  {
    title: 'Roleplay',
    description: 'Aprende todas as regras RP com explicações detalhadas e questões interativas.',
    icon: BookOpen,
    href: '/roleplay',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.15)',
    badge: '15 questões',
  },
  {
    title: 'Staff',
    description: 'Testes e exame completo de formação para candidatos a staff de servidor.',
    icon: Shield,
    href: '/staff/teste',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.15)',
    badge: 'Teste + Exame',
  },
];

const stats = [
  { label: 'Regras RP', value: '15', icon: BookOpen, color: '#10b981' },
  { label: 'Corporações', value: '7', icon: Building2, color: '#6366f1' },
  { label: 'Questões Staff', value: '35', icon: Shield, color: '#f59e0b' },
  { label: 'Jogadores formados', value: '∞', icon: Users, color: '#06b6d4' },
];

export default function Dashboard() {
  const { progress, loaded, getLevel } = useProgress();
  const level = getLevel();

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/4 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/4 blur-[100px]" />
        <div className="dot-grid absolute inset-0 opacity-40" />
      </div>

      <div className="relative z-10 px-6 lg:px-10 py-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="mb-12"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-lg bg-indigo-500/20 flex items-center justify-center">
              <Zap size={12} className="text-indigo-400" />
            </div>
            <span className="text-xs text-[var(--text-muted)] uppercase tracking-widest font-medium">
              RP Academy
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            <span className="text-gradient">Bem-vindo à</span>
            <br />
            <span className="text-gradient-accent">Plataforma RP</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-[var(--text-secondary)] text-lg max-w-xl leading-relaxed">
            Formação completa para roleplay de qualidade. Aprende regras, procedimentos e melhora a tua experiência no servidor.
          </motion.p>
        </motion.div>

        {/* Level card */}
        {loaded && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 glass rounded-2xl p-5 border border-white/8"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                  style={{ background: `linear-gradient(135deg, ${level.color}44, ${level.color}22)`, border: `1px solid ${level.color}33` }}
                >
                  <Trophy size={20} style={{ color: level.color }} />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-0.5">O teu nível</div>
                  <div className="font-semibold text-[var(--text-primary)]" style={{ color: level.color }}>
                    Nível {level.level} — {level.title}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 flex-wrap">
                {progress.roleplay.completed && (
                  <div className="text-right">
                    <div className="text-xs text-[var(--text-muted)] mb-0.5">Roleplay</div>
                    <div className="text-sm font-semibold" style={{ color: getScoreColor(progress.roleplay.bestScore, 15) }}>
                      {progress.roleplay.bestScore}/15 — {getScoreLabel(progress.roleplay.bestScore, 15)}
                    </div>
                  </div>
                )}
                {progress.staffTeste.completed && (
                  <div className="text-right">
                    <div className="text-xs text-[var(--text-muted)] mb-0.5">Teste Staff</div>
                    <div className="text-sm font-semibold" style={{ color: getScoreColor(progress.staffTeste.bestScore, 20) }}>
                      {progress.staffTeste.bestScore}/20 — {getScoreLabel(progress.staffTeste.bestScore, 20)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Stats row */}
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="glass rounded-xl p-4 border border-white/6 hover:border-white/10 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <stat.icon size={14} style={{ color: stat.color }} />
                <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest">{stat.label}</span>
              </div>
              <div className="text-2xl font-bold" style={{ color: stat.color }}>
                {stat.value}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main cards */}
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid lg:grid-cols-3 gap-5 mb-10"
        >
          {cards.map((card) => (
            <motion.div key={card.title} variants={fadeUp}>
              <Link href={card.href} className="block group">
                <div
                  className="relative h-full glass rounded-2xl p-6 border border-white/8 transition-all duration-300 hover:border-white/15 cursor-pointer overflow-hidden"
                  style={{
                    '--card-glow': card.glow,
                  } as React.CSSProperties}
                >
                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{ background: `radial-gradient(circle at 30% 30%, ${card.glow}, transparent 70%)` }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${card.color}1a`, border: `1px solid ${card.color}30` }}
                      >
                        <card.icon size={18} style={{ color: card.color }} />
                      </div>
                      <Badge variant="outline" size="sm">{card.badge}</Badge>
                    </div>

                    <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                      {card.description}
                    </p>

                    <div
                      className="flex items-center gap-2 text-xs font-medium transition-all duration-200 group-hover:gap-3"
                      style={{ color: card.color }}
                    >
                      Aceder
                      <ChevronRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress overview */}
        {loaded && (progress.roleplay.completed || progress.staffTeste.completed || progress.staffExame.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-2xl p-6 border border-white/8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Target size={16} className="text-indigo-400" />
              <h2 className="text-sm font-semibold text-[var(--text-primary)]">Progresso Geral</h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-[var(--text-muted)]">Roleplay</span>
                  <span className="text-xs font-medium text-emerald-400">
                    {progress.roleplay.bestScore}/{progress.roleplay.totalQuestions}
                  </span>
                </div>
                <ProgressBar
                  value={progress.roleplay.bestScore}
                  max={progress.roleplay.totalQuestions}
                  color="#10b981"
                  height="md"
                  animated={false}
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-[var(--text-muted)]">Staff Teste</span>
                  <span className="text-xs font-medium text-indigo-400">
                    {progress.staffTeste.bestScore}/{progress.staffTeste.totalQuestions}
                  </span>
                </div>
                <ProgressBar
                  value={progress.staffTeste.bestScore}
                  max={progress.staffTeste.totalQuestions}
                  color="#6366f1"
                  height="md"
                  animated={false}
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-[var(--text-muted)]">Exame Staff</span>
                  <span className="text-xs font-medium text-amber-400">
                    {progress.staffExame.length > 0
                      ? `${Math.max(...progress.staffExame.map((e) => e.score))}/15`
                      : 'Não realizado'}
                  </span>
                </div>
                <ProgressBar
                  value={progress.staffExame.length > 0 ? Math.max(...progress.staffExame.map((e) => e.score)) : 0}
                  max={15}
                  color="#f59e0b"
                  height="md"
                  animated={false}
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
