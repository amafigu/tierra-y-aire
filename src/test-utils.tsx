import { theme, ThemeType } from '@/styles/theme'
import { render, RenderOptions } from '@testing-library/react'
import { History } from 'history'
import { ReactElement } from 'react'
import { MemoryRouter, Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { LocaleContext, LocaleContextTypes } from './context/localeContext'
import { MenuContext, MenuContextTypes } from './context/menuContext'

interface IExtendedRenderOptions extends RenderOptions {
  theme?: ThemeType
  initialEntries?: string[]
  localeProviderProps: Partial<LocaleContextTypes>
  menuProviderProps?: Partial<MenuContextTypes>
  history?: History
}

export const customRender = (
  ui: ReactElement,
  options?: Omit<IExtendedRenderOptions, 'wrapper'>,
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <ThemeProvider theme={theme}>
        {options?.history ? (
          <Router
            location={options.history.location}
            navigator={options.history}
          >
            <LocaleContext.Provider
              value={options?.localeProviderProps as LocaleContextTypes}
            >
              <MenuContext.Provider
                value={options?.menuProviderProps as MenuContextTypes}
              >
                {children}
              </MenuContext.Provider>
            </LocaleContext.Provider>
          </Router>
        ) : (
          <MemoryRouter initialEntries={options?.initialEntries ?? ['/']}>
            <LocaleContext.Provider
              value={options?.localeProviderProps as LocaleContextTypes}
            >
              <MenuContext.Provider
                value={options?.menuProviderProps as MenuContextTypes}
              >
                {children}
              </MenuContext.Provider>
            </LocaleContext.Provider>
          </MemoryRouter>
        )}
      </ThemeProvider>
    )
  }

  return render(ui, { wrapper: Wrapper, ...options })
}

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react'

export { customRender as render }
