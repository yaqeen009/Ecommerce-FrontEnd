/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {               //color scheme
        primary: "#003366", 
        accent: "#4CAF50",
        secondary: "#B0B0B0",
        font: "#333333",
        background: "#FEFEFE",
        danger: {
          "100":"#FF1F00",
          "200":"#FFCFC8",
          "300":"#5E0B00",
          "400":"#8A6560",
          "500":"#FCE7E7"
        },
        success:{
          "100":"#0085FF",
          "200":"#91CAFF",
          "300":"#014B8F",
          "400":"#627F9A",
          "500":"#F0F5FD",
        },
        items:{
          'black':'#333333',
          'beige':'#FCE7E7',
          'blue':'#003366',
          'green':'#4CAF50'
        }
      },
      boxShadow:{       //elevation and shadows
        '1dp':'0px 0px 2px 0px rgba(0, 0, 0, 0.14), 0px 2px2px 0px rgba(0, 0, 0, 0.12), 0px 1px 3px 0px rgba(0, 0, 0, 0.20)',
        '2dp':'0px 3px 3px 0px rgba(0, 0, 0, 0.14), 0px 3px 4px 0px rgba(0, 0, 0, 0.12), 0px 1px 8px 0px rgba(0, 0, 0, 0.20)',
        '3dp':'0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12), 0px 3px 5px 0px rgba(0, 0, 0, 0.20)',
        '4dp':'0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12), 0px 7px 8px 0px rgba(0, 0, 0, 0.20) '
      },
      fontFamily:{
        montserrat:['Montserrat', 'sans-serif'],
        open_sans:['Open Sans','sans-serif'],
        roboto_slab:['Roboto Slab','sans-serif'],
      },
      fontSize:{
        'display':'48px',
        'headlind':'36px',
        'title':'24px',
        'body':'20px',
        'label':'16px',
        'tablet-display':'40px',
        'tablet-headline':'32px',
        'tablet-title':'20px',
        'tablet-body':'16px',
        'tablet-label':'14px',
        'mobile-display':'32px',
        'mobile-headline':'24px',
        'mobile-title':'18px',
        'mobile-body':'14px',
        'mobile-label':'12px',
      },
      fontWeight:{
        semiBold: '400'
      },
      screens:{
        'sm':{'max': '640px'},
        'md':{'min':'641px','max': '1024px'},
        'lg':{'min':'1025px'}
      },
    },
  },
  plugins: [],
};
