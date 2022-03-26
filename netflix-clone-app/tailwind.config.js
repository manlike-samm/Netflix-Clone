module.exports = {
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {screens: {
    'mobileL': '425px',
    // => @media (min-width: 475px) { ... }

    'bp2': '615px',
    // => @media (min-width: 630px) { ... }

    'tab': '750px',

    'bp3': '950px',
    // => @media (min-width: 950px) { ... }
    'bp4': '1440px',
    // => @media (min-width: 1480px) { ... }
  },
    extend: {
      spacing: {
        '45': '45rem',
        '448': '28rem',
      },
      aspectRatio: {
        '3/4': '3/4',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
