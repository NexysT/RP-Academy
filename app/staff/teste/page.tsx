'use client';

import { motion } from 'framer-motion';
import { Shield, Info, Shuffle, ClipboardCheck } from 'lucide-react';
import { Quiz } from '@/components/quiz/Quiz';
import { staffTesteQuestions } from '@/data/questions-staff-teste';
import { useProgress } from '@/hooks/useProgress';
import { useToast } from '@/hooks/useToast';
import { Badge } from '@/components/ui/Badge';
import type { QuizResult } from '@/types';

const principles = [
  { label: 'Imparcialidade', desc: 'Decisões sem favoritismo ou conflitos de interesse' },
  { label: 'Proporcionalidade', desc: 'Punição adequada à gravidade da infração' },
  { label: 'Investigação', desc: 'Ouvir todas as partes antes de agir' },
  { label: 'Profissionalismo', desc: 'Manter calma e consistência sempre' },
  { label: 'Transparência', desc: 'Comunicação clara e honesta' },
  { label: 'Escalada', desc: 'Dúvidas sobem para staff superior' },
  { label: 'Documentação', desc: 'Registar ocorrências e decisões' },
  { label: 'Zero Abuso', desc: 'Permissões usadas apenas para o servidor' },
];

export default function StaffTestePage() {
  const { updateStaffTesteProgress } = useProgress();
  const { addToast } = useToast();

  const handleComplete = (score: number, _results: QuizResult[]) => {
    updateStaffTesteProgress(score);
    const pct = Math.round((score / staffTesteQuestions.length) * 100);
    if (pct >= 80) {
      addToast(`Excelente resultado staff: ${score}/${staffTesteQuestions.length}`, 'success');
    } else if (pct >= 60) {
      addToast(`Bom: ${score}/${staffTesteQuestions.length} — continua a treinar`, 'info');
    } else {
      addToast(`${score}/${staffTesteQuestions.length} — Revê os princípios de staff`, 'warning');
    }
  };

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-amber-500/4 blur-[100px]" />
        <div className="dot-grid absolute inset-0 opacity-30" />
      </div>

      <div className="relative z-10">
        <div className="px-6 lg:px-10 pt-10 pb-8 border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/20 flex items-center justify-center">
                <ClipboardCheck size={18} className="text-amber-400" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[var(--text-primary)]">Teste Staff</h1>
                <p className="text-xs text-[var(--text-muted)]">Correção imediata após cada resposta</p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <Badge variant="warning">20 questões</Badge>
                <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] glass px-3 py-1.5 rounded-lg border border-white/8">
                  <Shuffle size={12} />
                  Aleatório
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="px-6 lg:px-10 py-8 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[260px_1fr] gap-8">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:sticky lg:top-6 self-start space-y-4"
            >
              <div className="glass rounded-2xl border border-white/8 overflow-hidden">
                <div className="px-4 py-3 border-b border-white/6 flex items-center gap-2">
                  <Shield size={13} className="text-amber-400" />
                  <span className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider">
                    Princípios Staff
                  </span>
                </div>
                <div className="p-2">
                  {principles.map((p, i) => (
                    <div key={i} className="px-3 py-2.5 rounded-xl hover:bg-white/4 transition-colors cursor-default">
                      <div className="text-xs font-semibold text-amber-400 mb-0.5">{p.label}</div>
                      <div className="text-[11px] text-[var(--text-muted)] leading-snug">{p.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-xl border border-amber-500/15 p-4">
                <div className="flex items-start gap-2">
                  <Info size={13} className="text-amber-400 mt-0.5 shrink-0" />
                  <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                    As perguntas são apresentadas em ordem aleatória. Algumas podem ter múltiplas respostas corretas.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <div className="mb-6 glass rounded-xl p-4 border border-amber-500/15">
                <div className="flex items-start gap-3">
                  <Info size={15} className="text-amber-400 mt-0.5 shrink-0" />
                  <div className="text-sm text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Modo Teste</strong> — Cada resposta é corrigida de imediato com explicação detalhada. Perguntas em ordem aleatória a cada tentativa.
                  </div>
                </div>
              </div>

              <Quiz
                questions={staffTesteQuestions}
                onComplete={handleComplete}
                mode="practice"
                randomize={true}
                title="Teste Staff"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
