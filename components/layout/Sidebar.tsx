'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Building2,
  BookOpen,
  Shield,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Siren,
  HeartPulse,
  Sword,
  Star,
  Globe,
  Users,
  ClipboardCheck,
  FileText,
  Zap,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavGroup {
  label: string;
  icon: React.ReactNode;
  href?: string;
  children?: { label: string; href: string; icon: React.ReactNode }[];
}

const corpLinks = [
  { label: 'PSP', href: '/corporacoes/psp', icon: <Siren size={14} /> },
  { label: 'GNR', href: '/corporacoes/gnr', icon: <Shield size={14} /> },
  { label: 'INEM', href: '/corporacoes/inem', icon: <HeartPulse size={14} /> },
  { label: 'Militar', href: '/corporacoes/militar', icon: <Sword size={14} /> },
  { label: 'Polícia Militar', href: '/corporacoes/policia-militar', icon: <Star size={14} /> },
  { label: 'Polícia', href: '/corporacoes/policia', icon: <Users size={14} /> },
  { label: 'Estrangeiro', href: '/corporacoes/estrangeiro', icon: <Globe size={14} /> },
];

const staffLinks = [
  { label: 'Teste', href: '/staff/teste', icon: <ClipboardCheck size={14} /> },
  { label: 'Exame', href: '/staff/exame', icon: <FileText size={14} /> },
];

const navGroups: NavGroup[] = [
  {
    label: 'Dashboard',
    icon: <LayoutDashboard size={16} />,
    href: '/',
  },
  {
    label: 'Corporações',
    icon: <Building2 size={16} />,
    children: corpLinks,
  },
  {
    label: 'Roleplay',
    icon: <BookOpen size={16} />,
    href: '/roleplay',
  },
  {
    label: 'Staff',
    icon: <Shield size={16} />,
    children: staffLinks,
  },
];

function NavItem({ group }: { group: NavGroup }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(() => {
    if (!group.children) return false;
    return group.children.some((c) => pathname.startsWith(c.href));
  });

  const isActive = group.href ? pathname === group.href : false;
  const hasActiveChild = group.children?.some((c) => pathname.startsWith(c.href));

  if (group.href) {
    return (
      <Link href={group.href}>
        <div
          className={cn(
            'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group cursor-pointer',
            isActive
              ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/20'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5'
          )}
        >
          <span
            className={cn(
              'transition-colors duration-200',
              isActive ? 'text-indigo-400' : 'text-[var(--text-muted)] group-hover:text-[var(--text-secondary)]'
            )}
          >
            {group.icon}
          </span>
          {group.label}
          {isActive && (
            <motion.div
              layoutId="active-pill"
              className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400"
            />
          )}
        </div>
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group',
          hasActiveChild
            ? 'text-[var(--text-primary)]'
            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5'
        )}
      >
        <span
          className={cn(
            'transition-colors',
            hasActiveChild ? 'text-indigo-400' : 'text-[var(--text-muted)] group-hover:text-[var(--text-secondary)]'
          )}
        >
          {group.icon}
        </span>
        <span className="flex-1 text-left">{group.label}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[var(--text-muted)]"
        >
          <ChevronDown size={14} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="ml-5 mt-1 mb-1 pl-3 border-l border-white/6 flex flex-col gap-0.5">
              {group.children?.map((child) => {
                const active = pathname === child.href || pathname.startsWith(child.href + '/');
                return (
                  <Link key={child.href} href={child.href}>
                    <div
                      className={cn(
                        'flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer',
                        active
                          ? 'bg-indigo-500/12 text-indigo-300'
                          : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:bg-white/4'
                      )}
                    >
                      <span className={active ? 'text-indigo-400' : ''}>{child.icon}</span>
                      {child.label}
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-5 py-6 border-b border-white/5">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
            <Zap size={16} className="text-white" />
          </div>
          <div>
            <div className="text-sm font-bold text-[var(--text-primary)] leading-none">RP Academy</div>
            <div className="text-[10px] text-[var(--text-muted)] mt-0.5 uppercase tracking-widest">Plataforma</div>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        <div className="flex flex-col gap-0.5">
          {navGroups.map((group) => (
            <NavItem key={group.label} group={group} />
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-white/5">
          <div className="px-3 mb-2">
            <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-semibold">Referência</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-3 px-3 py-2.5 text-sm text-[var(--text-muted)] rounded-xl">
              <ChevronRight size={14} />
              <span className="text-xs">v1.0 — RP Platform</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-50 lg:hidden w-9 h-9 rounded-xl glass flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
      >
        <Menu size={18} />
      </button>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 bottom-0 w-[var(--sidebar-width)] sidebar-shadow bg-[var(--bg-secondary)] z-40 border-r border-[var(--border-subtle)]">
        {sidebarContent}
      </aside>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 bottom-0 w-[var(--sidebar-width)] bg-[var(--bg-secondary)] border-r border-[var(--border-subtle)] z-50 lg:hidden"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-white/5 transition-all"
              >
                <X size={16} />
              </button>
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
