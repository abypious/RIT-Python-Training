import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Python Automation Workshop',
  description: '5-Day practical workshop for beginners to learn Python automation with projects, examples, and an interactive playground.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_28%),linear-gradient(180deg,_#020617,_#020617_60%,_#0f172a)]">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
