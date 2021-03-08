module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing: {
      'widest': '.2rem'
     },

    extend: {
      fontFamily: {
        'body': ['Inter', 'sans-serif'],
      },
      gridTemplateRows: {
        //main rows
        'three': '50px auto auto',
        'two':'20% 80%'
      },
      gridTemplateColumns: {
        //main rows
        'two': '70% 30%'
      },

      //background colors
      backgroundColor: theme => ({
        //dark theme
        'darkestBlue': 'hsl(230, 17%, 14%)',
        'darkerBlue': 'hsl(232, 19%, 15%)',
        'darkBlue': 'hsl(228, 28%, 20%)',
        'mediumBlue': 'hsl(228, 34%, 66%)',
        'white': 'hsl(0, 0%, 100%)'
       }),

       //Colors
       colors: {
        'darkestBlue': 'hsl(230, 17%, 14%)',
        'darkerBlue': 'hsl(232, 19%, 15%)',
        'darkBlue': 'hsl(228, 28%, 20%)',
        'mediumBlue': 'hsl(228, 34%, 66%)',
        'white': 'hsl(0, 0%, 100%)',
        'limeGreen': 'hsl(163, 72%, 41%)',
        'brightRed': 'hsl(356, 69%, 56%)',
        'facebook': 'hsl(208, 92%, 53%)',
        'twitter': 'hsl(203, 89%, 53%)',
        'instagram': 'hsl(329, 70%, 58%)',
        'youtube': 'hsl(348, 97%, 39%)'
       },

       //Border colors
       borderColor: theme => ({
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        'facebook': 'hsl(208, 92%, 53%)',
        'twitter': 'hsl(203, 89%, 53%)',
        'instagram': 'hsl(329, 70%, 58%)',
        'youtube': 'hsl(348, 97%, 39%)'
       })

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
