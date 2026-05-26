'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExpandableCardProps {
  title: string;
  shortDesc: string;
  children: React.ReactNode;
  accentColor?: string;
  tags?: string[];
  badge?: React.ReactNode;
  className?: string;
}

export function ExpandableCard({
  title,
  shortDesc,
  children,
  accentColor = 'var(--accent-primary)',
  tags,
  badge,
  className,
}: ExpandableCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        'glass rounded-2xl border transition-all duration-300',
        open ? 'border-white/12' : 'border-white/7 hover:border-white/11',
        className
      )}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-5 py-4 group"
      >
        <div className="flex items-start gap-3">
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="shrink-0 mt-0.5 w-5 h-5 rounded-md flex items-center justify-center"
            style={{
              background: open ? `${accentColor}20` : 'rgba(255,255,255,0.05)',
              color: open ? accentColor : 'var(--text-muted)',
            }}
          >
            <ChevronDown size={12} />
          </motion.div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3
                className="text-sm font-semibold leading-snug transition-colors duration-200"
                style={{ color: open ? 'var(--text-primary)' : 'var(--text-primary)' }}
              >
                {title}
              </h3>
              {badge}
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">{shortDesc}</p>
            {tags && tags.length > 0 && (
              <div className="flex gap-1.5 flex-wrap mt-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-md font-medium border"
                    style={{
                      color: accentColor,
                      background: `${accentColor}10`,
                      borderColor: `${accentColor}25`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div
              className="mx-5 mb-5 pt-4 border-t"
              style={{ borderColor: `${accentColor}15` }}
            >
              <div className="text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                {children}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
