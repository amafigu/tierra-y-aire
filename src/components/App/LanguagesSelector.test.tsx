import { LocaleContextTypes } from '@/context/localeContext'
import { MenuContextTypes } from '@/context/menuContext'
import en from '@/i18n/en.json'
import es from '@/i18n/es.json'
import { customRender } from '@/test-utils'
import { fireEvent, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { LanguagesSelector } from './LanguagesSelector'

const languages = { en, es }

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
