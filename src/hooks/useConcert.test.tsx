import {
  concertsData,
  erroredGetConcertsMock,
  getConcertsWrapper,
  successfullGetConcertsMock,
} from '@/__mocks__/getConcerts'
import { ApolloError } from '@apollo/client'
import { waitFor } from '@testing-library/react'
import { GraphQLError } from 'graphql'

describe('useConcerts Hook when successful', () => {
  const { result } = getConcertsWrapper(successfullGetConcertsMock)

  it('should be defined and return the correct data', async () => {
    expect(result).toBeDefined()
    await waitFor(() => {
      expect(result.current).toEqual({
        loading: false,
        error: undefined,
        data: concertsData,
      })
    })
  })
})

describe('useConcerts Hook when it has errors', () => {
  const { result } = getConcertsWrapper(erroredGetConcertsMock)

  it('should be defined and return an error', async () => {
    expect(result).toBeDefined()
    await waitFor(() => {
      expect(result.current).toEqual({
        loading: false,
        error: new ApolloError({
          graphQLErrors: [new GraphQLError('Error by fetching concerts')],
        }),
        data: undefined,
      })
    })
  })
})
