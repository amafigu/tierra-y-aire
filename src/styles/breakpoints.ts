import { css, CSSObject, Interpolation } from 'styled-components'

interface Size {
  small: string
  mobile: string
  tablet: string
  laptop: string
  desktop: string
  widescreen: string
  panoramic: string
}

const screen: Size = {
  small: '400px',
  mobile: '600px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px',
  widescreen: '1536px',
  panoramic: '1920px',
}

type CSSArgs = CSSObject | TemplateStringsArray

export const small = (
  first: CSSArgs,
  ...interpolations: Interpolation<object>[]
) => css`
  @media (min-width: ${screen.small}) {
    ${css(first, ...interpolations)};
  }
`
export const mobile = (
  first: CSSArgs,
  ...interpolations: Interpolation<object>[]
) => css`
  @media (min-width: ${screen.mobile}) {
    ${css(first, ...interpolations)};
  }
`
export const tablet = (
  first: CSSArgs,
  ...interpolations: Interpolation<object>[]
) => css`
  @media (min-width: ${screen.tablet}) {
    ${css(first, ...interpolations)};
  }
`
export const laptop = (
  first: CSSArgs,
  ...interpolations: Interpolation<object>[]
) => css`
  @media (min-width: ${screen.laptop}) {
    ${css(first, ...interpolations)};
  }
`
export const desktop = (
  first: CSSArgs,
  ...interpolations: Interpolation<object>[]
) => css`
  @media (min-width: ${screen.desktop}) {
    ${css(first, ...interpolations)};
  }
`
export const widescreen = (
  first: CSSArgs,
  ...interpolations: Interpolation<object>[]
) => css`
  @media (min-width: ${screen.widescreen}) {
    ${css(first, ...interpolations)};
  }
`
export const panoramic = (
  first: CSSArgs,
  ...interpolations: Interpolation<object>[]
) => css`
  @media (min-width: ${screen.panoramic}) {
    ${css(first, ...interpolations)};
  }
`
