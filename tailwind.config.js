/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'pan-bg': 'pan 30s linear infinite',
      },
      keyframes: {
        pan: {
          '0%': { backgroundPosition: 'center center' },
          '50%': { backgroundPosition: 'center left' },
          '100%': { backgroundPosition: 'center center' },
        },
      },
    },
  },
  
  plugins: [],
}

