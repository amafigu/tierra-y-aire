import { Carousel } from '@/components/App/Carousel'
import { CourseCard } from '@/components/App/CourseCard'
import { Box } from '@/components/ui/Box'
import { Flex } from '@/components/ui/Flex'
import { Typography } from '@/components/ui/Typography'
import { useCourseCards } from '@/hooks/useCourseCards'
import { useTranslate } from '@/hooks/useTranslate'
import { desktop, laptop, tablet } from '@/styles/breakpoints'
import { CourseCard as ICourseCard } from '@/types/Cards'

import { FC } from 'react'
import styled from 'styled-components'
import { Banner } from './Banner'

const CoursesSection = styled(Flex)`
  background-color: ${(props) => props.theme.color.backgroundPrimary};
`

const CardsContainer = styled.div`
  margin-bottom: ${(props) => props.theme.spacingExtraLarge};
  background-color: ${(props) => props.theme.backgroundPrimary};
`
const Cards = styled(Flex)`
  gap: 3rem;
  margin: 3rem auto;

  ${tablet`
   flex-wrap: wrap;
   flex-direction: row;
   max-width: 600px;
   justify-content:center;
  `}

  ${laptop`
    max-width: 800px;
  `}

   ${desktop`
    max-width: 1200px;
  `}
`
const TextWrapper = styled(Flex)`
  text-align: center;
  background-color: ${(props) => props.theme.color.backgroundPrimary};

  ${tablet`
    width:60%;
    `}

  ${desktop`
    width:50%;
    `}
`

export const Home: FC = () => {
  const translate = useTranslate()
  const { courseCards } = useCourseCards()
  const text = translate.pages.home

  return (
    <Flex as='main' aria-label='Home page'>
      <Flex $direction='column' $justifyContent='center' $width='100%'>
        <Banner />
        <CoursesSection
          as='section'
          aria-label='Teaser'
          $direction='column'
          $alignItems='center'
          $width='100%'
        >
          <TextWrapper
            aria-label='Info'
            $direction='column'
            $width='80%'
            $margin='1rem auto 0'
            $gap='1.5rem'
          >
            <Typography $size='large' $weight='semibold' $color='branding'>
              Tierra y Aire
            </Typography>
            <Typography $size='extraLarge' $weight='bold'>
              {text.title}
            </Typography>
            <Box $width='80%' $margin='0 auto'>
              <Typography $size='medium' $weight='normal'>
                {text.subtitle}
              </Typography>
            </Box>
          </TextWrapper>
          <CardsContainer>
            <Cards
              $direction='column'
              $alignItems='center'
              $width='100%'
              aria-label='Avaliable courses'
            >
              {courseCards &&
                courseCards.map((card: ICourseCard) => (
                  <CourseCard
                    image={card.image}
                    name={card.name}
                    path={card.path}
                    description={card.description}
                    key={card.name}
                  />
                ))}
            </Cards>
          </CardsContainer>
        </CoursesSection>
        <Carousel />
      </Flex>
    </Flex>
  )
}
