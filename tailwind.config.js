/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(229 47% 5%)',
        foreground: 'hsl(190 100% 94%)',
        cyan: {
          neon: '#18f7ff',
        },
        violet: {
          electric: '#9b5cff',
        },
        panel: 'rgba(8, 16, 34, 0.68)',
      },
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(24, 247, 255, 0.35)',
        violet: '0 0 40px rgba(155, 92, 255, 0.28)',
      },
      backgroundImage: {
        'cyber-grid':
          'linear-gradient(rgba(24,247,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(155,92,255,.08) 1px, transparent 1px)',
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 0.55, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.04)' },
        },
      },
    },
  },
  plugins: [],
};
