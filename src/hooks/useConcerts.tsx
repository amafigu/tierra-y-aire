import { GET_CONCERTS } from '@/graphql/queries'
import { useQuery } from '@apollo/client'

export const useConcerts = () => {
  const { loading, error, data } = useQuery(GET_CONCERTS)
  return { loading, error, data }
}
