import { createGlobalStyle } from 'styled-components'
import type { ThemeType } from './theme'

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  html {
    overflow-y: scroll;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    font-family: ${(props) => props.theme.font.family.primary};
    font-size: ${(props) => props.theme.font.size.medium};
    color: ${(props) => props.theme.color.primary};
    padding: 0;
    margin: 0;
  }
`
