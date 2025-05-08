import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-orbitron)', 'sans-serif'],
      },
      colors: {
        'neon-blue': '#7FDBFF',
        'electric-pink': '#FF6EC7',
        'mint-green': '#7CFFCB',
        'soft-yellow': '#FFEF8B',
        'dark-bg': '#0e0e0e',
        'brand-fuchsia': '#f0f',
        'brand-yellow': '#ff0',
      },
      spacing: {
        'section-desktop': '5rem',
        'section-mobile': '3.5rem',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.7' },
        }
      },
      boxShadow: {
        'neon-blue': '0 0 15px theme(colors.neon-blue), 0 0 30px theme(colors.neon-blue / 0.6)',
        'neon-pink': '0 0 15px theme(colors.electric-pink), 0 0 30px theme(colors.electric-pink / 0.6)',
        'neon-green': '0 0 15px theme(colors.mint-green), 0 0 30px theme(colors.mint-green / 0.6)',
        'neon-yellow': '0 0 15px theme(colors.soft-yellow), 0 0 30px theme(colors.soft-yellow / 0.6)',
      },
      backgroundImage: {
        'section-gradient-purple-blue': 'linear-gradient(to bottom right, #4c1d95, #2563eb)',
        'hero-title-gradient': 'linear-gradient(to right, #f97316, #ec4899, #8b5cf6)',
      }
    },
  },
  plugins: [],
};
export default config; 