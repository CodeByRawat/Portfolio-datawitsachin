/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/(portfolio)/**/*.{js,ts,jsx,tsx}', './components/portfolio/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        jacket: '#E8622A', ink: '#111111', navy: '#0F1B3D', mustard: '#F2C230',
        tomato: '#E5352B', cobalt: '#1D3FD8', magenta: '#E83FAE', paper: '#EDEDEA',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
