import {
  concertsData,
  getConcertsWrapper,
  successfullGetConcertsMock,
} from '@/__mocks__/getConcerts'
import { LocaleContextTypes } from '@/context/localeContext'
import en from '@/i18n/en.json'
import es from '@/i18n/es.json'
import { customRender, screen, waitFor } from '@/test-utils'
import { vi } from 'vitest'
import { Concerts } from './Concerts'

const languages = { en, es }

describe('<Concerts />', () => {
  let localeProviderProps: Partial<LocaleContextTypes>

  beforeEach(() => {
    localeProviderProps = {
      languages,
      translate: languages['en'],
      language: 'en',
      setLanguage: vi.fn(),
    }
  })

  it('renders information in the component', async () => {
    const { wrapper: ApolloWrapper } = getConcertsWrapper(
      successfullGetConcertsMock,
    )

    customRender(
      <ApolloWrapper>
        <Concerts />
      </ApolloWrapper>,
      {
        initialEntries: ['/'],
        localeProviderProps,
      },
    )

    await waitFor(() => {
      expect(
        screen.getByText(concertsData.getConcerts[0].venue),
      ).toBeInTheDocument()
      expect(
        screen.getByText(concertsData.getConcerts[1].venue),
      ).toBeInTheDocument()

      expect(
        screen.getByText(
          `${concertsData.getConcerts[0].city}, ${concertsData.getConcerts[0].country}`,
        ),
      ).toBeInTheDocument()
      expect(
        screen.getByText(
          `${concertsData.getConcerts[1].city}, ${concertsData.getConcerts[1].country}`,
        ),
      ).toBeInTheDocument()

      expect(screen.getByText('24/12/2024')).toBeInTheDocument()
      expect(screen.getByText('24/10/2024')).toBeInTheDocument()

      const ticketLinks = screen.getAllByRole('link', { name: /ticket/i })
      expect(ticketLinks[0]).toHaveAttribute(
        'href',
        concertsData.getConcerts[0].ticketsLink,
      )
      expect(ticketLinks[1]).toHaveAttribute(
        'href',
        concertsData.getConcerts[1].ticketsLink,
      )

      const venueLinks = screen.getAllByRole('link', { name: /venue/i })
      expect(venueLinks[0]).toHaveAttribute(
        'href',
        concertsData.getConcerts[0].venueLink,
      )
      expect(venueLinks[1]).toHaveAttribute(
        'href',
        concertsData.getConcerts[1].venueLink,
      )
    })
  })
})
