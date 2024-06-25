import { LocaleContextProvider } from '@/context/localeContext'
import { MenuProvider } from '@/context/menuContext'
import { GlobalStyle } from '@/styles/GlobalStyle'
import { theme } from '@/styles/theme'
import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AppRoutes } from './AppRoutes'

export const App: FC = () => {
  return (
    <BrowserRouter>
      <LocaleContextProvider>
        <MenuProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <AppRoutes />
          </ThemeProvider>
        </MenuProvider>
      </LocaleContextProvider>
    </BrowserRouter>
  )
}

export default App
