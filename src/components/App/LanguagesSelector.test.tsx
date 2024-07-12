import { LocaleContext, LocaleContextTypes } from '@/context/localeContext'
import { MenuContext, MenuContextTypes } from '@/context/menuContext'
import en from '@/i18n/en.json'
import es from '@/i18n/es.json'
import { theme } from '@/styles/theme'
import { fireEvent, render, screen } from '@testing-library/react'
import { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { vi } from 'vitest'
import { LanguagesSelector } from './LanguagesSelector'

const languages = { en, es }

const customRender = (
  ui: ReactElement,
  {
    localeProviderProps,
    menuProviderProps,
  }: {
    localeProviderProps: Partial<LocaleContextTypes>
    menuProviderProps: Partial<MenuContextTypes>
  },
) => {
  return render(
    <ThemeProvider theme={theme}>
      <LocaleContext.Provider value={localeProviderProps as LocaleContextTypes}>
        <MenuContext.Provider value={menuProviderProps as MenuContextTypes}>
          {ui}
        </MenuContext.Provider>
      </LocaleContext.Provider>
    </ThemeProvider>,
  )
}

describe('<LanguagesSelector />', () => {
  let localeProviderProps: Partial<LocaleContextTypes>
  let menuProviderProps: Partial<MenuContextTypes>

  beforeEach(() => {
    localeProviderProps = {
      languages,
      translate: languages['en'],
      language: 'en',
      setLanguage: vi.fn(),
    }
    menuProviderProps = {
      setShowMobile: vi.fn(),
      showMobile: false,
      showLanguages: false,
      setShowLanguages: vi.fn(),
      showCourses: false,
      setShowCourses: vi.fn(),
    }
  })

  it('selects spanish as language on click', () => {
    customRender(<LanguagesSelector />, {
      localeProviderProps,
      menuProviderProps,
    })

    const spanishButton = screen.getByText('ES')
    fireEvent.click(spanishButton)

    expect(localeProviderProps.setLanguage).toHaveBeenCalledWith('es')
  })

  it('selects english as language on click', () => {
    localeProviderProps.language = 'es'
    customRender(<LanguagesSelector />, {
      localeProviderProps,
      menuProviderProps,
    })

    const englishButton = screen.getByText('EN')
    fireEvent.click(englishButton)

    expect(localeProviderProps.setLanguage).toHaveBeenCalledWith('en')
  })

  it('hides mobile menu and language selector on language change', () => {
    customRender(<LanguagesSelector />, {
      localeProviderProps,
      menuProviderProps,
    })

    const spanishButton = screen.getByText('ES')
    fireEvent.click(spanishButton)

    expect(localeProviderProps.setLanguage).toHaveBeenCalledWith('es')
    expect(menuProviderProps.setShowMobile).toHaveBeenCalledWith(false)
    expect(menuProviderProps.setShowLanguages).toHaveBeenCalledWith(false)
  })
})
