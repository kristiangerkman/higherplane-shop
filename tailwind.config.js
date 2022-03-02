module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    fontSize: {
      title1: [
        '64px',
        {
          letterSpacing: '-0.02em',
        },
      ],
      title2: [
        '40px',
        {
          letterSpacing: '-0.02em',
        },
      ],
      title3: [
        '24px',
        {
          letterSpacing: '-0.02em',
        },
      ],
      subtitle: [
        '24px'
      ],
      body: [
        '16px',
        { lineHeight: '140%' },
      ],
      small: [
        '14px'
      ],
      pre: [
        '11px',
        { letterSpacing: '0.03em' },
      ],
      button: [
        '11px',
        { letterSpacing: '0.03em' },
      ],
      spaced: [
        '20px',
        { letterSpacing: '0.25em' },
      ],
      notsure: [
        '20px',
      ],
      spacedSmall: [
        '12px',
        { letterSpacing: '0.25em' },
      ],
      link: [
        '10px',
      ]
    },
    fontWeight: {
      title1: 700,
      title2: 700,
      title3: 700,
      subtitle: 500,
      body: 500,
      bold: 700,
      semiBold: 600,
      small: 500,
      pre: 700,
      button: 700,
      link: 700,
    },
    extend: {
      fontFamily: {
        hp: "'HP-regular', serif"
      },
      colors: {
        'hp': '#090916',
        'primary': '#ECECEC',
        'cta': '#5BF226',
        'warn': '#F22657',
        'accent1': '#FF1FBD',
        'accent2': '#36A0FF',
      }
    }
  },
  variants: {},
  plugins: []
};