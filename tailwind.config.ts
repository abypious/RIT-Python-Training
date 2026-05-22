import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 20px 80px rgba(59,130,246,0.15)',
      },
      backgroundImage: {
        'hero-pattern': 'radial-gradient(circle at top left, rgba(59,130,246,0.20), transparent 35%), radial-gradient(circle at bottom right, rgba(168,85,247,0.18), transparent 25%)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: '#0f172a',
        surface2: '#111827',
      },
    },
  },
  plugins: [],
};

export default config;
