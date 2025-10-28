/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        accent: 'var(--accent)',
      },
      backgroundColor: {
        skin: {
          base: 'var(--bg)',
          card: 'var(--card)',
          muted: 'var(--muted)',
        },
      },
      textColor: {
        skin: {
          base: 'var(--text)',
          muted: 'color-mix(in srgb, var(--text) 70%, transparent)',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        lift: '0 6px 30px -10px rgba(2, 6, 23, 0.25)',
      },
      borderRadius: {
        '2xl': '1.25rem',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: 0, transform: 'translateY(16px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        'float-sm': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'slide-up': {
          from: { opacity: 0, transform: 'translateY(24px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease forwards',
        'float-sm': 'float-sm 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease forwards',
      },
    },
  },
  plugins: [],
};
