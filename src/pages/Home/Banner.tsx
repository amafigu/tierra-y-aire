import { Flex } from '@/components/ui/Flex'
import { Image } from '@/components/ui/Image'
import { Typography } from '@/components/ui/Typography'
import { educationBanner } from '@/constants/backgroundImages'
import { useTranslate } from '@/hooks/useTranslate'
import { desktop, tablet } from '@/styles/breakpoints'
import { FC } from 'react'
import styled from 'styled-components'

const Wrapper = styled(Flex)`
  background-color: ${(props) => props.theme.color.backgroundPrimary};
`

const Container = styled(Flex)`
  min-height: 400px;
  position: relative;
  pointer-events: none;

  ${tablet`
     min-height: 100%;
    `}
`

const Title = styled(Typography)`
  ${desktop`
   font-size: ${(props) => props.theme.font.size.huge};
   font-weight: ${(props) => props.theme.font.weight.extraBold};
  `}
`

const Subtitle = styled(Typography)`
  opacity: ${(props) => props.theme.opacity.primary};

  ${tablet`  
    font-size: ${(props) => props.theme.font.size.semiMedium};
 `}
`

const TextContainer = styled(Flex)`
  display: none;
  position: absolute;
  top: 30%;
  left: 20%;
  z-index: ${(props) => props.theme.zIndex.textBanner};

  ${tablet`
    display:flex;`};
`

const Img = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  object-fit: cover;
  object-position: left;
  opacity: ${(props) => props.theme.opacity.tertiary};

  ${tablet`
    position:relative;
    z-index: ${(props) => props.theme.zIndex.imageBanner};
  `}
`

export const Banner: FC = () => {
  const translate = useTranslate()
  const text = translate.components.homeBanner

  return (
    <Wrapper $alignItems='center' $justifyContent='center' as='section'>
      <Container
        $justifyContent='center'
        $alignItems='center'
        $height='100%'
        $width='100%'
      >
        <TextContainer $direction='column'>
          <Title $size='large' $weight='extraBold'>
            {text.titleFirst}
          </Title>
          <Title>{text.titleSecond}</Title>
          <Flex $direction='column' $margin='1.5rem 0 0 0'>
            <Subtitle $size='small' $weight='normal' $color='secondary'>
              {text.subtitleFirst}
            </Subtitle>
            <Subtitle>{text.subtitleSecond}</Subtitle>
            <Subtitle>{text.subtitleThird}</Subtitle>
          </Flex>
        </TextContainer>

        <Img
          $width='100%'
          $height='100%'
          $objectFit='cover'
          src={`/images${educationBanner}`}
          alt='Home page background'
        />
      </Container>
    </Wrapper>
  )
}
