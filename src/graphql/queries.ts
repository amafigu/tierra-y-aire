import { gql } from '@apollo/client'

export const GET_CONCERTS = gql`
  query GetConcerts {
    getConcerts {
      id
      venue
      venueLink
      city
      country
      ticketsLink
      concertDate
    }
  }
`
