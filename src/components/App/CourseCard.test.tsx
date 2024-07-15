import { CourseCard } from '@/components/App/CourseCard'
import { firstCard, hostPrefix } from '@/constants/images'
import { ROUTES } from '@/constants/routes'
import { LocaleContextTypes } from '@/context/localeContext'
import en from '@/i18n/en.json'
import es from '@/i18n/es.json'
import { EnsembleCourses } from '@/pages/courses/EnsembleCourses'
import { customRender } from '@/test-utils'
import { fireEvent, screen } from '@testing-library/react'
import { createMemoryHistory, History } from 'history'
import { Route, Routes } from 'react-router-dom'
import { vi } from 'vitest'

const languages = { en, es }

describe('<CourseCard />', () => {
  let localeProviderProps: Partial<LocaleContextTypes>
  let history: History

  beforeEach(() => {
    localeProviderProps = {
      languages,
      translate: languages['en'],
      language: 'en',
      setLanguage: vi.fn(),
    }

    history = createMemoryHistory({ initialEntries: ['/'] })
  })

  const courseData = {
    name: en.components.courseCards.cards.ensemble.title,
    description: en.components.courseCards.cards.ensemble.description,
    path: ROUTES.COURSES.ENSEMBLE,
    image: firstCard,
  }

  it('renders the course card with correct data', () => {
    customRender(<CourseCard {...courseData} />, {
      localeProviderProps,
      history,
    })

    const nameElement = screen.getByRole('heading', {
      name: new RegExp(courseData.name, 'i'),
    })
    const descriptionElement = screen.getByText(
      new RegExp(courseData.description, 'i'),
    )
    const imageElement = screen.getByAltText(
      new RegExp(`${courseData.name} course`, 'i'),
    )
    const linkElement = screen.getByRole('link', {
      name: new RegExp(`${courseData.name} course details`, 'i'),
    })

    expect(nameElement).toBeInTheDocument()
    expect(descriptionElement).toBeInTheDocument()
    expect(imageElement).toBeInTheDocument()
    expect(linkElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute(
      'src',
      `${hostPrefix}${courseData.image}`,
    )
    expect(linkElement).toHaveAttribute('href', courseData.path)
  })

  it('navigates to the course details page on click', () => {
    customRender(
      <Routes>
        <Route path='/' element={<CourseCard {...courseData} />} />
        <Route path={ROUTES.COURSES.ENSEMBLE} element={<EnsembleCourses />} />
      </Routes>,
      {
        localeProviderProps,
        history,
      },
    )

    const linkElement = screen.getByRole('link', {
      name: new RegExp(`${courseData.name} course details`, 'i'),
    })
    fireEvent.click(linkElement)

    expect(history.location.pathname).toBe(courseData.path)
  })
})
