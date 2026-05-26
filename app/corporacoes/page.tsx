'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Building2 } from 'lucide-react';
import { corporacoes } from '@/data/corporacoes';
import { Badge } from '@/components/ui/Badge';

const stagger = { animate: { transition: { staggerChildren: 0.07 } } };
const fadeUp = { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 } };

export default function CorporacoesIndexPage() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-indigo-500/4 blur-[100px]" />
        <div className="dot-grid absolute inset-0 opacity-30" />
      </div>

      <div className="relative z-10 px-6 lg:px-10 py-10 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center">
              <Building2 size={18} className="text-indigo-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[var(--text-primary)]">Corporações</h1>
              <p className="text-xs text-[var(--text-muted)]">Seleciona uma corporação para aceder aos seus guias</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {corporacoes.map((corp) => (
            <motion.div key={corp.id} variants={fadeUp}>
              <Link href={`/corporacoes/${corp.id}`} className="block group">
                <div className="glass rounded-2xl border border-white/8 p-5 hover:border-white/14 transition-all duration-300 cursor-pointer relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at 20% 20%, ${corp.accentColor}08, transparent 60%)` }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl border"
                        style={{ background: `${corp.accentColor}15`, borderColor: `${corp.accentColor}30` }}
                      >
                        {corp.icon}
                      </div>
                      <Badge variant="outline" size="sm">{corp.shortName}</Badge>
                    </div>
                    <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-1.5">{corp.name}</h2>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4 line-clamp-2">
                      {corp.description}
                    </p>
                    <div className="flex items-center gap-1 text-xs font-medium transition-all group-hover:gap-2" style={{ color: corp.accentColor }}>
                      Ver conteúdo <ChevronRight size={12} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
