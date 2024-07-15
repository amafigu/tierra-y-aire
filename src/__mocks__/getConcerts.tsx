import { GET_CONCERTS } from '@/graphql/queries'
import { useConcerts } from '@/hooks/useConcerts'
import { ApolloError } from '@apollo/client'
import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { renderHook } from '@testing-library/react'
import { GraphQLError } from 'graphql'
import React from 'react'

export const concertsData = {
  getConcerts: [
    {
      __typename: 'Concert',
      id: '1',
      venue: 'Concert Venue',
      venueLink: 'https://concertvenue.com',
      city: 'Berlin',
      country: 'Germany',
      ticketsLink: 'https://ticketsconcert.com',
      concertDate: new Date('2024-12-24'),
    },
    {
      __typename: 'Concert',
      id: '2',
      venue: 'Music Venue',
      venueLink: 'https://musicvenue.com',
      city: 'Potsdam',
      country: 'Germany',
      ticketsLink: 'https://ticketsmusic.com',
      concertDate: new Date('2024-10-24'),
    },
  ],
}

// Successful mock of useConcerts
export const successfullGetConcertsMock: MockedResponse[] = [
  {
    request: {
      query: GET_CONCERTS,
    },
    result: {
      data: concertsData,
    },
  },
]

// Error mock of useConcerts
export const erroredGetConcertsMock: MockedResponse[] = [
  {
    request: {
      query: GET_CONCERTS,
    },
    error: new ApolloError({
      graphQLErrors: [new GraphQLError('Error by fetching concerts')],
    }),
  },
]

// Wrapper to mimic the hook functionality
export function getConcertsWrapper(mockData: MockedResponse[] = []) {
  const wrapper = ({ children }: React.PropsWithChildren) => (
    <MockedProvider mocks={mockData} addTypename={true}>
      {children}
    </MockedProvider>
  )
  const { result } = renderHook(() => useConcerts(), { wrapper })
  return {
    wrapper,
    result,
  }
}
