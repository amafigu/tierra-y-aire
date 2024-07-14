import { LocaleContextTypes } from '@/context/localeContext'
import { MenuContextTypes } from '@/context/menuContext'
import en from '@/i18n/en.json'
import es from '@/i18n/es.json'
import { About } from '@/pages/About'
import { customRender } from '@/test-utils'
import { fireEvent, screen } from '@testing-library/react'
import { createMemoryHistory, History } from 'history'
import { vi } from 'vitest'
import { Navbar } from './Navbar'

const languages = { en, es }

describe('<Navbar />', () => {
  let localeProviderProps: Partial<LocaleContextTypes>
  let menuProviderProps: Partial<MenuContextTypes>
  let history: History

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
    history = createMemoryHistory({ initialEntries: ['/'] })
  })

  it('navigates to about page by clicking on about link', () => {
    customRender(<Navbar />, {
      localeProviderProps,
      menuProviderProps,
      history,
    })

    const aboutLink = screen.getByText(/About us/i)

    fireEvent.click(aboutLink)

    expect(history.location.pathname).toBe('/about')

    customRender(
      <>
        <About />
      </>,
      {
        localeProviderProps,
        menuProviderProps,
      },
    )

    const aboutText = screen.getByText(
      /established since 2018, the Tierra y Aire ethos has always been one of integration and sharing. Today, we have become the people’s choice for drum education as the largest specialized drum school in Rosario./i,
    )

    expect(aboutText).toBeInTheDocument()
  })
})
