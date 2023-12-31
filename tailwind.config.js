/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        move1: {
          '0%': { transform: 'translateX(5vw) translateY(40vh)' },
          '20%': { transform: 'translateX(45vw) translateY(15vh)' }, 
          '40%': { transform: 'translateX(15vw) translateY(-40vh)' },
          '60%': { transform: 'translateX(-20vw) translateY(15vh)' },
          '80%': { transform: 'translateX(-45vw) translateY(10vh)' },
          '100%': { transform: 'translateX(5vw) translateY(40vh)' },
        },
        move2: {
          '0%': { transform: 'translateX(30vw) translateY(40vh)' },
          '20%': { transform: 'translateX(-35vw) translateY(-30vh)' }, 
          '40%': { transform: 'translateX(-30vw) translateY(10vh)' },
          '60%': { transform: 'translateX(45vw) translateY(-10vh)' },
          '80%': { transform: 'translateX(-45vw) translateY(-40vh)' },
          '100%': { transform: 'translateX(30vw) translateY(40vh)' },
        },
      },
      animation: {
        move1: 'move1 60s linear infinite',
        move2: 'move2 60s linear infinite',
      },
    },
    colors: {
      'white': '#FBF9FF',
      'light-gray': '#E8E8E8',
      'metal': '#565584',
      'moss': '#92977E',
      'olive': '#38423B',
      'light-violet': '#7B5E7B',
      'dark-violet': '#0B032D',
    }

  },
  variants: {},
  plugins: [],
}
