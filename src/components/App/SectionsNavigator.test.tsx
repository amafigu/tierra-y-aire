import { LocaleContextTypes } from '@/context/localeContext'
import en from '@/i18n/en.json'
import es from '@/i18n/es.json'
import { About } from '@/pages/About'
import { customRender } from '@/test-utils'
import { fireEvent, screen } from '@testing-library/react'
import { createMemoryHistory, History } from 'history'
import { vi } from 'vitest'

const languages = { en, es }

describe('<SectionsNavigator />', () => {
  let localeProviderProps: Partial<LocaleContextTypes>
  let history: History

  beforeEach(() => {
    localeProviderProps = {
      languages,
      translate: languages['en'],
      language: 'en',
      setLanguage: vi.fn(),
    }

    history = createMemoryHistory({ initialEntries: ['/about'] })
  })

  it('calls scrooIntoView by clicking on section links', () => {
    const mockScrollIntoView = vi.fn()

    global.HTMLElement.prototype.scrollIntoView = mockScrollIntoView

    customRender(<About />, {
      localeProviderProps,
      history,
    })

    const schoolLink = screen.getByText(/our school/i)
    fireEvent.click(schoolLink)
    expect(mockScrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
    })

    const founderLink = screen.getByText(/our founder/i)
    fireEvent.click(founderLink)
    expect(mockScrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
    })
  })
})
