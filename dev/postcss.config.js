
module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
    'postcss-mixins': {},
    'postcss-nested': {},
    'postcss-custom-media': {},
    '@fullhuman/postcss-purgecss': {
      'content': [
          // './src/**/*.{js,jsx,ts,tsx, html}',
          // './src/*.{js,jsx,ts,tsx, html}',
          './src/**/*.html'
      ],
      'defaultExtractor': content => content.match(/[\w-/:]+(?<!:)/g) || [],
      'safelist': ['html', 'body']
    },

  },
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFFFF',
      pageBG: 'var(--pageBG)',
      pageText: 'var(--pageText)',
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '940px',
      lg: '1200px',
      xl: '1600px',
    },
    extend: {
      fontFamily: {
        sans: ['Nimbus Sans L', 'system-ui', "Segoe UI", "Helvetica Neue", 'Arial', "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        serif: ['Argesta Hairline', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
        inherit: 'inherit',
      },
      fontSize: {
        xxs: '.625rem',
      },
      zIndex: {
        '-1': '-10',
        50: 50,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
      },
    },
  },
  variants: {
    extend: {},
  },
}
