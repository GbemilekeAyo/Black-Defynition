// tailwind.config.js
content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
module.exports = {
  purge: [],
  darkMode: false, 
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Poppins', 'sans'],
      },
      colors: {
        primary: {
          100: '#F3E8FF',
          200: '#D4BFFF',
          300: '#B48CFF',
          400: '#9561FF',
          500: '#7B3FFF', 
          600: '#6E38E0',
          700: '#5D2EB8',
          800: '#4C2490',
          900: '#3D1A6A',
        },
        secondary: {
          100: '#E4F7FF',
          200: '#AEE0FF',
          300: '#7AC4FF',
          400: '#4DA4FF',
          500: '#2680FF', 
          600: '#1D69E0',
          700: '#1453B8',
          800: '#0C3E90',
          900: '#062A6A',
        },
        success: '#00C853', // Success color
        error: '#FF1744',   // Error color
        dark: '#121212',    // Dark background color
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

