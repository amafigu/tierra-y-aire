import { Box } from '@/components/ui/Box'
import { Flex } from '@/components/ui/Flex'
import { Image } from '@/components/ui/Image'
import { Typography } from '@/components/ui/Typography'
import { hostPrefix } from '@/constants/images'
import { TESTIMONIALS, TestimonialProps } from '@/constants/testimonials'
import { useTranslate } from '@/hooks/useTranslate'
import { desktop, laptop } from '@/styles/breakpoints'
import { camelCaseToTitleCase, titleCase } from '@/utils/utils'
import {
  faChevronLeft,
  faChevronRight,
  faQuoteLeft,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { FC, useCallback } from 'react'
import styled from 'styled-components'
import { Button } from '../ui/Button'

const Wrapper = styled(Flex)`
  background: ${(props) => props.theme.color.backgroundSecondary};
  padding-top: ${(props) => props.theme.spacing.large};
  padding-bottom: ${(props) => props.theme.spacing.extraLarge};
  width: 100%;

  .embla {
    overflow: hidden;
    width: 100%;
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
  width: 90%;
  user-select: none;
  text-align: center;
  text-align: left;
  margin: 0 auto ${(props) => props.theme.spacing.large};
`

const Container = styled(Box)`
  position: relative;
  margin: 0 auto;
  width: 100%;
`

const Testimonial = styled(Flex)`
  cursor: pointer;
  user-select: none;
  padding: 0 1rem;
  gap: 1rem;
  ${desktop`
    flex-direction: row;
    gap: 4rem;
  `}
`

const ImageContainer = styled(Flex)`
  width: 100%;
  max-width: 460px;
  max-height: 460px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`

const TextContainer = styled(Flex)`
  max-width: 460px;
  max-height: 460px;
  margin: 20px 0;
`

const Text = styled(Typography)`
  padding: 20px 0;
  opacity: ${(props) => props.theme.opacity.primary};

  ${laptop`
    font-size: ${(props) => props.theme.font.size.medium};
  `}
`

const CarouselBtn = styled(Button)`
  display: none;
  position: absolute;
  top: 50%;
  border: none;
  background: none;
  transform: translateY(-50%);
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
  const { translate } = useTranslate()
  const text = translate.components.testimonialCarousel
  const [emblaRef, emblaAPi] = useEmblaCarousel(
    {
      loop: true,
    },
    [Autoplay({ delay: 6000 })],
  )

  const scrollPrev = useCallback(() => {
    if (emblaAPi) emblaAPi.scrollPrev()
  }, [emblaAPi])

  const scrollNext = useCallback(() => {
    if (emblaAPi) emblaAPi.scrollNext()
  }, [emblaAPi])

  return (
    <Wrapper
      as='section'
      $direction='column'
      $width='90%'
      $margin='0 auto'
      aria-label='Testimonials'
    >
      <Title as='div' $color='primary' $size='semiLarge' $weight='extraBold'>
        {titleCase(text.title)}
      </Title>
      <Container className='embla' ref={emblaRef}>
        <Box className='embla__container'>
          {TESTIMONIALS.map((testimonial: TestimonialProps, index: number) => (
            <Box as='article' key={index} className='embla__slide'>
              <Testimonial
                $direction='column'
                $alignItems='center'
                $justifyContent='center'
                aria-label='Testimonial'
              >
                <ImageContainer>
                  <Image
                    $borderRadius='8px'
                    $width='100%'
                    $height='100%'
                    $objectFit='cover'
                    $objectPosition='top'
                    src={`${hostPrefix}${testimonial.image}`}
                    alt='Testimonial'
                  />
                </ImageContainer>
                <TextContainer
                  $alignItems='center'
                  $justifyContent='center'
                  $direction='column'
                  $width='100%'
                  aria-label='testimonial text'
                >
                  <Flex
                    $direction='column'
                    $justifyContent='center'
                    $alignItems='flex-start'
                  >
                    <FontAwesomeIcon
                      beat={true}
                      color='#ed068a'
                      icon={faQuoteLeft}
                      size='xl'
                    />
                    <Text $size='small' $weight='normal' $color='secondary'>
                      {text[testimonial.name]}
                    </Text>
                    <Typography $size='medium' $weight='bold' $color='branding'>
                      {camelCaseToTitleCase(testimonial.name)}
                    </Typography>
                  </Flex>
                </TextContainer>
              </Testimonial>
            </Box>
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
