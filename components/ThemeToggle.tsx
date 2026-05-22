'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <button className="btn-ghost">Loading...</button>;

  return (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-100 shadow-lg shadow-cyan-500/5 transition hover:bg-slate-800/90 dark:bg-slate-100/90 dark:text-slate-900 dark:hover:bg-slate-200"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
