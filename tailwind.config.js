// tailwind.config.js
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
          backgroundImage: theme => ({
              'body-pattern': "url('../img/micro_carbon.png')"

          })  
      },
      fontFamily: {
          body: ['Anton']
      }
    },
    variants: {},
    plugins: [],
  }