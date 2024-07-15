import { CoursesList } from '@/components/App/CoursesList'
import { navigationMenuItems } from '@/constants/navigationMenuItems'
import { LocaleContextTypes } from '@/context/localeContext'
import { MenuContextTypes } from '@/context/menuContext'
import en from '@/i18n/en.json'
import es from '@/i18n/es.json'
import { customRender } from '@/test-utils'
import { fireEvent, screen } from '@testing-library/react'
import { createMemoryHistory, History } from 'history'
import { vi } from 'vitest'

const languages = { en, es }

describe('<CoursesList />', () => {
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
    global.scroll = vi.fn()
  })

  it('renders the courses list with correct data', () => {
    customRender(<CoursesList />, {
      localeProviderProps,
      menuProviderProps,
    })

    const text = localeProviderProps.translate?.pages.courses

    navigationMenuItems.forEach((item) => {
      const courseTitle = text?.[item.name as keyof typeof text]?.title
      if (courseTitle) {
        const courseItem = screen.getByText(courseTitle)
        expect(courseItem).toBeInTheDocument()
      } else {
        throw new Error(
          `Title for course '${item.name}' not found in translations.`,
        )
      }
    })
  })

  it('navigates to correct courses', () => {
    customRender(<CoursesList />, {
      localeProviderProps,
      menuProviderProps,
      history,
    })

    const text = localeProviderProps.translate?.pages.courses

    navigationMenuItems.forEach((item) => {
      const courseTitle = text?.[item.name as keyof typeof text]?.title
      if (courseTitle) {
        const courseLink = screen.getByText(courseTitle)
        fireEvent.click(courseLink)
        expect(history.location.pathname).toBe(item.ref)
        expect(global.scroll).toHaveBeenCalledWith(0, 0)
      } else {
        throw new Error(`Link for course '${item.name}' not found.`)
      }
    })
  })
})
