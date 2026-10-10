/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#070A09',
          900: '#0A0E0C',
          850: '#0E1311',
          800: '#101513',
          700: '#161C19',
          600: '#1E2622',
          500: '#2A342E',
        },
        emerald: {
          DEFAULT: '#00D6A3',
          light: '#63F5C5',
          dark: '#00B388',
          dim: '#00A37E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'aurora-1': 'aurora1 20s ease-in-out infinite alternate',
        'aurora-2': 'aurora2 25s ease-in-out infinite alternate',
        'aurora-3': 'aurora3 28s ease-in-out infinite alternate',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'shimmer': 'shimmer 4s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'gradient-x': 'gradientX 5s ease infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        aurora1: {
          '0%,100%': { transform: 'translate(0%, 0%) scale(1)', opacity: '0.18' },
          '50%': { transform: 'translate(8%, 5%) scale(1.15)', opacity: '0.25' },
        },
        aurora2: {
          '0%,100%': { transform: 'translate(0%, 0%) scale(1.1)', opacity: '0.15' },
          '50%': { transform: 'translate(-6%, 4%) scale(1)', opacity: '0.22' },
        },
        aurora3: {
          '0%,100%': { transform: 'translate(0%, 0%) scale(1)', opacity: '0.12' },
          '50%': { transform: 'translate(5%, -8%) scale(1.2)', opacity: '0.2' },
        },
        floatSlow: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 20px -8px rgba(0,214,163,0.4)' },
          '50%': { boxShadow: '0 0 35px -4px rgba(0,214,163,0.6)' },
        },
        gradientX: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
