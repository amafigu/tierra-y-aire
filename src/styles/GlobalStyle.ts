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
    font-family: arial, sans-serif;
    font-size: 1.25rem;
    color: #fff;
    padding: 0;
    margin: 0;
  }
`
