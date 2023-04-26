/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontSize: {
        xs1: '0.4rem',
    
      },
      fontFamily: {
        bruno: "'Bruno Ace SC', serif",
        bruno2: "'Bruno Ace', serif"
      },
      backgroundImage: {
        'my': "url('https://images2.alphacoders.com/532/532794.jpg')",
        'basic': "url('./assets/stardeckImages/BcardIcons.png')",
        'n': "url('./assets/stardeckImages/NCardIcons.png')",
        'normal': "url('./assets/stardeckImages/NcardIcons.png')",
        'r': "url('./assets/stardeckImages/RcardIcons.png')",
        'vr': "url('./assets/stardeckImages/MRcardIcons.png')",
        'ur': "url('./assets/stardeckImages/URcardicons.png')",

      },
      animation: {
        'ab': 'spin 100s linear infinite',
        'ac': 'spin 200s linear infinite'

      },
      
      
    },
    
  },
  
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

