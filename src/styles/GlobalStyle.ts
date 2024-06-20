import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    overflow-y: scroll;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    font-family: ${(props) => props.theme.fontFamilyPrimary};
    font-size: ${(props) => props.theme.fontSize.medium};
    color: ${(props) => props.theme.colors.fontPrimary};
    padding: 0;
    margin: 0;
  }
`
