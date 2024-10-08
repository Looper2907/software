/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1D4E89', // Ocean Blue
          light: '#3A73C6',
          dark: '#123766',
        },
        secondary: {
          DEFAULT: '#78D5A3', // Mint Green
          light: '#A9E8C5',
          dark: '#57B282',
        },
        neutral: {
          background: '#F2F2F2', // Soft Gray for backgrounds
        },
        accent: {
          orange: {
            DEFAULT: '#F26A3C', // Sunset Orange
            light: '#F89C71',
            dark: '#DB5630',
          },
          pink: {
            DEFAULT: '#F78DA7', // Coral Pink
            light: '#FABDC7',
            dark: '#D36B88',
          },
          yellow: {
            DEFAULT: '#FEC601', // Golden Yellow
            light: '#FFDA48',
            dark: '#E5AD00',
          },
          teal: {
            DEFAULT: '#128C7E', // Teal
            light: '#36A497',
            dark: '#0E6C60',
          },
          lavender: {
            DEFAULT: '#E0BBE4', // Light Lavender
            light: '#EDD1EC',
            dark: '#C19AC4',
          },
          charcoal: {
            DEFAULT: '#333333', // Charcoal for text or headings
          },
        },
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      fontSize: {
        'h1': ['1.75rem', { lineHeight: '2.25rem' }], // Updated for larger headings
        'h2': ['1.5rem', { lineHeight: '2rem' }],
        'h3': ['1.25rem', { lineHeight: '1.75rem' }],
      },
    },
  },
  plugins: [],
}
