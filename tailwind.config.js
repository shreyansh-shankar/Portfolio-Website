/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        journal: ['"Patrick Hand"', 'cursive', 'sans-serif'],
        hand: ['"Architects Daughter"', 'cursive', 'sans-serif'],
        doodle: ['"Caveat"', 'cursive', 'sans-serif'],
        marker: ['"Permanent Marker"', 'cursive', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        paper: {
          50: '#fdfdfb',
          100: '#faf7ee',
          200: '#f5f0df',
          300: '#ece3cb',
          paperLines: '#d6e4ff',
          marginLine: '#fca5a5',
          ink: '#18181b',
        },
      },
    },
  },
  plugins: [],
}
