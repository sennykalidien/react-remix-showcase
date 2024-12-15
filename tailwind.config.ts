import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: "var(--font-neue-frutiger)",
      body: "var(--font-neue-frutiger)",
    },
    colors: {
      white: "var(--white)",
      black: "var(--black)",
      grey: {
        'grey-storm': 'var(--grey-storm)',
        'grey-overcast': 'var(--grey-overcast)',
        'grey-broken': 'var(--grey-broken)',
        'grey-scattered': 'var(--grey-scattered)',
        'grey-few': 'var(--grey-few)',
      },
      yellow: {
        'light-yellow': "var(--light-yellow)",
      },
      red: {
        'dark-red': 'var(--dark-red)',
      },
      blue: {
        'dusk-blue': 'var(--dusk-blue)',
        'lightmorning-blue':    'var(--lightmorning-blue)',
      },
      green: {
        'green': 'var(--green)',
        'dusk-green': 'var(--dusk-green)',
      },
      pink: {
        'morning-pink':       'var(--morning-pink)',
        'lightmorning-pink':  'var(--lightmorning-pink)',
        'evening-pink':       'var(--evening-pink)',
        'evening-lilac':      'var(--evening-lilac)'
      },
    },
    container: {
      padding: {
        DEFAULT: "1.5rem",
      },
      center: true,
      // screens: {
      //   sm: "720px",
      //   md: "720px",
      //   lg: "720px",
      //   xl: "720px",
      //   "2xl": "720px",
      // },
    },
    extend: {
      colors: {
        'schiphol-blue': 'var(--schiphol-blue)',
        'afternoon-blue': 'var(--afternoon-blue)',
        'seebuyfly-yellow': 'var(--seebuyfly-yellow)',
      },
      backgroundImage: {
        'gradient-flights': 'var(--gradient-flights)',
        'gradient-parking': 'var(--gradient-parking)',
        'gradient-at-schiphol': 'var(--gradient-at-schiphol)',
        'gradient-more': 'var(--gradient-more)',
        'gradient-privium': 'var(--gradient-privium)',
      },
    },
  },
  plugins: [],
} satisfies Config;
