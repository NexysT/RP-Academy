import type { Metadata } from 'next';
import { Sidebar } from '@/components/layout/Sidebar';
import { ToastContainer } from '@/components/ui/ToastContainer';
import { ToastProvider } from '@/hooks/useToast';
import './globals.css';

export const metadata: Metadata = {
  title: 'RP Academy — Plataforma de Aprendizagem',
  description: 'Plataforma educativa premium para servidores roleplay. Guias, procedimentos, quizzes e formação staff.',
  keywords: 'roleplay, RP, MTA, GTA, formação, staff, polícia, INEM, corporações',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased">
        <ToastProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 lg:pl-[var(--sidebar-width)] min-w-0">
              <div className="min-h-screen">
                {children}
              </div>
            </main>
          </div>
          <ToastContainer />
        </ToastProvider>
      </body>
    </html>
  );
}
