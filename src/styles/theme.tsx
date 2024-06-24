export const theme = {
  color: {
    strockeSecondary: '#30343f', //borderDark
    strockePrimary: '#3b3e4b', // borderDarker
    strockeTertiary: '#8e8d8d', // borderLight
    backgroundPrimary: '#202027',
    backgroundSecondary: '#12141d',
    backgroundTertiary: '#20232d',
    backgroundButton: '#2f323f',
    primary: '#fff',
    secondary: '#ddd',
    light: '#a8a8a8',
    medium: '#606060',
    dark: '#000',
    branding: '#ed068a',
  },
  font: {
    weight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extraBold: 800,
    },
    size: {
      extraHuge: '3rem',
      huge: '2.5rem',
      extraLarge: '2rem',
      large: '1.75rem',
      semiLarge: '1.5rem',
      medium: '1.25rem',
      semiMedium: '1.125rem',
      small: '1rem',
      smallest: '0.75rem',
    },
    family: {
      primary: 'arial, sans-serif',
    },
    lineHeight: {
      primary: '128%',
    },
  },
  boxShadow: {
    primary: `0 3px 1px -2px rgb(0 0 0 / 20%),
    0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)`,
  },
  spacing: {
    huge: '5rem',
    extraLarge: '4rem',
    semiExtraLarge: '3rem',
    large: '2.5rem',
    semiLarge: '2rem',
    extraRegular: '1.75rem',
    regular: '1.5rem',
    semiRegular: '1.25rem',
    small: '1rem',
    semiSmall: '0.75rem',
    smallest: '0.5rem',
  },
  borderRadius: {
    huge: '16px',
    large: '12px',
    regular: '8px',
    small: '4px',
  },
  dimensions: {
    minHeightPage: '65vh',
    widthDesktopPage: '80%',
    widthMobilePage: '90%',
    widthCard: '332px',
  },
  opacity: {
    primary: 0.8,
    secondary: 0.9,
    tertiary: 0.5,
  },
  zIndex: {
    dropdown: 600,
    mobileMenu: 500,
    whatsappButton: 700,
    upperBanner: 300,
    textBanner: 200,
    imageBanner: 100,
  },
}

export type ThemeType = typeof theme
