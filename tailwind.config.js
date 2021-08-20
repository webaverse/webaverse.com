module.exports = {
  important: true,
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        815: '815px',
      },
      maxWidth: {
        1096: '1096px',
        720: '720px',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-focus-within'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
