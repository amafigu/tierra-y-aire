import { Button } from '@/components/ui/Button'
import { Flex } from '@/components/ui/Flex'
import { Typography } from '@/components/ui/Typography'
import { useConcerts } from '@/hooks/useConcerts'
import { useTranslate } from '@/hooks/useTranslate'
import { tablet } from '@/styles/breakpoints'
import { Concert } from '@/types/Concert'
import { formatDate, titleCase } from '@/utils/utils'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Container = styled(Flex)`
  min-height: 80vh;
  background-color: ${(props) => props.theme.color.backgroundSecondary};
`

const Content = styled(Flex)`
  margin-bottom: 3rem;
  ${tablet`
    width: 80%;   
    `}
`

const Title = styled(Typography)`
  margin: ${(props) => props.theme.spacing.regular} 0;
`

const List = styled(Flex)`
  background-color: ${(props) => props.theme.color.backgroundSecondary};
  :last-child {
    border-bottom: none;
  }
`

const ListItem = styled(Flex)`
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing.small} 0;
  background-color: ${(props) => props.theme.color.backgroundSecondary};
  border-bottom: 1px solid #ccc;

  ${tablet`
    flex-direction: row;
    align-items:center;
    gap: ${(props) => props.theme.spacing.regular}; 
    `}
`

const Data = styled(Flex)`
  ${tablet`
    flex-direction: row;
    `}
  gap: 1rem;
`

const ButtonsContainer = styled(Flex)`
  gap: 1.5rem;
  ${tablet`
  flex-direction: column;
  `}
`

const ConcertButton = styled(Button)`
  flex: 0.5;
  color: ${(props) => props.theme.color.primary};
  background-color: ${(props) => props.theme.color.branding};
  border-radius: ${(props) => props.theme.borderRadius.regular};
  width: 128px;
  ${tablet`
    width: 168px;
    `}
`

export const Concerts: FC = () => {
  const { loading, error, data } = useConcerts()
  const { translate } = useTranslate()
  const text = translate.pages.concerts
  let sortedConcerts = []

  if (data?.getConcerts) {
    sortedConcerts = [...data.getConcerts].sort(
      (a: Concert, b: Concert) => Number(b.concertDate) - Number(a.concertDate),
    )
  }

  if (error) {
    console.error(error.message)
  }

  return (
    <Container
      $direction='column'
      $alignItems='center'
      $justifyContent='center'
    >
      {loading && <p>Loading...</p>}
      <Title $size='semiLarge' $weight='bold' $isUpperCase={true}>
        {text.title}
      </Title>
      <Content as='section' $width='90%' $margin='0 auto'>
        <List
          aria-label='concerts list'
          $direction='column'
          $margin='0 auto'
          $width='100%'
        >
          {sortedConcerts.map((concert: Concert, index: number) => (
            <ListItem key={index}>
              <Data $direction='column'>
                <Typography>{formatDate(concert.concertDate)}</Typography>
                <Typography $color='branding'>
                  {titleCase(concert.venue)}
                </Typography>
                <Typography>
                  {concert.city}, {concert.country}
                </Typography>
              </Data>
              <ButtonsContainer $direction='column'>
                <Link to={concert.venueLink}>
                  <ConcertButton $size='medium' $variant='primary'>
                    <Typography $size='small' $isUpperCase={true}>
                      {'venue'}
                    </Typography>
                  </ConcertButton>
                </Link>
                <Link to={concert.ticketsLink}>
                  <ConcertButton $size='medium' $variant='primary'>
                    <Typography $size='small' $isUpperCase={true}>
                      {'ticket'}
                    </Typography>
                  </ConcertButton>
                </Link>
              </ButtonsContainer>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  )
}
