import { Box } from '@/components/ui/Box'
import { Button } from '@/components/ui/Button'
import { Flex } from '@/components/ui/Flex'
import { Image } from '@/components/ui/Image'
import { Typography } from '@/components/ui/Typography'
import { founder, hostPrefix } from '@/constants/images'
import { facebookUrl, instagramUrl, youtubeUrl } from '@/constants/midia'
import { useTranslate } from '@/hooks/useTranslate'
import { desktop, laptop, tablet } from '@/styles/breakpoints'
import {
    faFacebookF,
    faInstagram,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Section = styled(Flex)`
  padding: ${(props) => props.theme.spacing.extraLarge} 0;
`
const Container = styled(Box)`
  float: none;
  width: 100%;
`
const ImageContainer = styled(Flex)`
  float: left;
  width: 32%;
  width: 100%;
  margin-right: ${(props) => props.theme.spacing.regular};
  margin-bottom: ${(props) => props.theme.spacing.regular};

  ${desktop`
    width: 40%;
    max-width: 680px;
    `}

  ${laptop`
    width: 50%;
    margin-bottom: 0;
  `}
`
const Img = styled(Image)`
  object-fit: cover;
  border-radius: ${(props) => props.theme.borderRadius.regular};
  margin: auto;

  ${tablet`
  margin: 0;
  `}
`

export const FounderSection = forwardRef<HTMLDivElement>((_, ref) => {
  const { translate } = useTranslate()
  const text = translate.components.founderBanner

  return (
    <Section
      ref={ref}
      as='section'
      $justifyContent='center'
      $gap='20px'
      $width='90%'
      $margin='auto'
    >
      <Container>
        <ImageContainer $alignItems='flex-start'>
          <Img
            $width='100%'
            alt='Artist drumming'
            src={`${hostPrefix}${founder}`}
          />
        </ImageContainer>
        <Box>
          <Typography $size='huge' $weight='extraBold' $opacity='primary'>
            Rolo Veron
          </Typography>
          <Typography
            as='div'
            $size='semiMedium'
            $weight='normal'
            $color='secondary'
            className='position'
          >
            {text.role}
          </Typography>
          <Typography $size='semiMedium' $weight='normal' $color='secondary'>
            {text.descriptionFirst}
          </Typography>
          <Typography>{text.descriptionSecond}</Typography>
          <Flex $direction='column' $justifyContent='center' $width='100%'>
            <Box $margin='1.5rem 0'>
              <Typography>
                {text.follow} Rolo Veron {text.followAt}
              </Typography>
            </Box>
            <Box className='row'>
              <Flex className='icons' $gap='20px' $justifyContent='flex-start'>
                <Button
                  $variant='link'
                  $size='small'
                  as={Link}
                  to={instagramUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size='2x'
                    color='#ed068a'
                  />
                </Button>
                <Button
                  $variant='link'
                  $size='small'
                  as={Link}
                  to={facebookUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    size='2x'
                    color='#ed068a'
                  />
                </Button>
                <Button
                  $variant='link'
                  $size='small'
                  as={Link}
                  to={youtubeUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FontAwesomeIcon icon={faYoutube} size='2x' color='#ed068a' />
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Section>
  )
})
