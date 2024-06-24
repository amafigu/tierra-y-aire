import { Box } from '@/components/ui/Box'
import { Flex } from '@/components/ui/Flex'
import { Image } from '@/components/ui/Image'
import { Typography } from '@/components/ui/Typography'
import { TESTIMONIALS, TestimonialProps } from '@/constants/testimonials'
import { useTranslate } from '@/hooks/useTranslate'
import { desktop, laptop } from '@/styles/breakpoints'
import { camelCaseToTitleCase } from '@/utils/utils'
import {
  faChevronLeft,
  faChevronRight,
  faQuoteLeft,
  faQuoteRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useEmblaCarousel from 'embla-carousel-react'
import { FC, useCallback } from 'react'
import styled from 'styled-components'
import { Button } from '../ui/Button'

const Wrapper = styled(Box)`
  background: ${(props) => props.theme.color.backgroundSecondary};
  padding-top: ${(props) => props.theme.spacing.large};
  padding-bottom: ${(props) => props.theme.spacing.extraLarge};

  .embla {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
  }
  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }
`

const Title = styled(Typography)`
  width: 100%;
  user-select: none;
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing.large};
`
const Container = styled(Box)`
  position: relative;

  margin: 0 auto;
`

const Testimonial = styled(Flex)`
  cursor: pointer;
  user-select: none;

  ${desktop`
    flex-direction: row;
  `}
`

const ImageContainer = styled(Flex)`
  max-width: 460px;
  max-height: 460px;
`

const Text = styled(Typography)`
  padding: 20px 0;
  opacity: ${(props) => props.theme.opacity.primary};

  ${laptop`
    padding: 20px 0;
    font-size: ${(props) => props.theme.font.size.medium};
  `}
`

const CarouselBtn = styled(Button)`
  display: none;
  position: absolute;
  top: 50%;
  border: none;
  background: none;
  ${laptop`
    display: flex;
  `}
`

const ButtonLeft = styled(CarouselBtn)`
  left: 8%;
`

const ButtonRight = styled(CarouselBtn)`
  right: 8%;
`

export const Carousel: FC = () => {
  const translate = useTranslate()
  const text = translate.components.testimonialCarousel
  const [emblaRef, emblaAPi] = useEmblaCarousel({
    loop: true,
  })

  const scrollPrev = useCallback(() => {
    if (emblaAPi) emblaAPi.scrollPrev()
  }, [emblaAPi])

  const scrollNext = useCallback(() => {
    if (emblaAPi) emblaAPi.scrollNext()
  }, [emblaAPi])

  return (
    <Wrapper as='section' $width='100%' aria-label='Testimonials'>
      <Title
        as='div'
        $color='primary'
        $size='large'
        $weight='extraBold'
        $isUpperCase={true}
      >
        {text.title}
      </Title>
      <Container className='embla' ref={emblaRef}>
        <Box className='embla__container'>
          {TESTIMONIALS.map((testimonial: TestimonialProps, index: number) => (
            <Flex as='article' key={index} className='embla__slide'>
              <Testimonial
                $direction='column'
                $alignItems='center'
                $justifyContent='center'
                $gap='4rem'
                aria-label='Testimonial'
              >
                <ImageContainer $alignItems='center' $justifyContent='center'>
                  <Image
                    $borderRadius='8px'
                    $width='100%'
                    $height='100%'
                    $objectFit='cover'
                    $objectPosition='top'
                    src={`/images/${testimonial.image}`}
                    alt='Testimonial'
                  />
                </ImageContainer>
                <Flex
                  $alignItems='center'
                  $justifyContent='center'
                  $direction='column'
                  $width='460px'
                  aria-label='testimonial text'
                >
                  <Flex $justifyContent='flex-start' $width='100%'>
                    <FontAwesomeIcon
                      beat={true}
                      color='#ed068a'
                      icon={faQuoteLeft}
                    />
                  </Flex>
                  <Flex $alignItems='center'>
                    <Text $size='small' $weight='normal'>
                      {text[testimonial.name]}
                    </Text>
                  </Flex>
                  <Typography $size='medium' $weight='bold' $color='branding'>
                    {camelCaseToTitleCase(testimonial.name)}
                  </Typography>
                  <Flex $justifyContent='flex-end' $width='100%'>
                    <FontAwesomeIcon
                      beat={true}
                      color='#ed068a'
                      icon={faQuoteRight}
                    />
                  </Flex>
                </Flex>
              </Testimonial>
            </Flex>
          ))}
        </Box>
        <ButtonLeft
          $size='medium'
          $variant='link'
          className='embla__prev'
          onClick={scrollPrev}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </ButtonLeft>
        <ButtonRight
          $size='medium'
          $variant='link'
          className='embla__next'
          onClick={scrollNext}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </ButtonRight>
      </Container>
    </Wrapper>
  )
}
