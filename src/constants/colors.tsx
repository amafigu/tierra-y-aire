export const colors = {
  strockeSecondary: '#30343f',
  strockePrimary: '#3b3e4b',
  strockeTertiary: '#8e8d8d',
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
}

export type Color = keyof typeof colors

export const opacities = {
  primary: 0.8,
  secondary: 0.9,
  tertiary: 0.5,
  light: 0.3,
}

export type Opacity = keyof typeof opacities
