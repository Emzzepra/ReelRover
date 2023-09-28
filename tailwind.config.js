/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        landing: '#F9EED2',
        button: '#DFA91C',
        hero: '#1C52DF',
        buttongold: '#70550E',
        textp: '#688CEA',
        input: '#688CEA',
        home: '#F2F2F2',
        placeholder: '#ACACAC',
        link: '#BA8D17',
        cards: '#8DA8EF',
        footer: '#585858',
        
      },

      fontFamily: {
        heading: ['Roboto Slab', 'sans'],
        body: ['Inter', 'sans'],
    },
    },
  },
  plugins: [],
}

