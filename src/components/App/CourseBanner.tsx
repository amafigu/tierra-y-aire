import { Flex } from '@/components/ui/Flex'
import { Image } from '@/components/ui/Image'
import { Typography } from '@/components/ui/Typography'
import { hostPrefix } from '@/constants/images'
import { laptop } from '@/styles/breakpoints'
import { titleCase } from '@/utils/utils'
import { FC } from 'react'
import styled from 'styled-components'

interface CourseBannerProps {
  imageUrl: string
  name: string
  text: string
  invert: boolean
}

const Wrapper = styled(Flex)`
  background-color: ${(props) => props.theme.color.backgroundSecondary};
`

const Container = styled(Flex)`
  margin: 3rem auto;
  gap: 28px;

  ${laptop`  
    margin: 6rem auto;
    flex-direction: row;
    width: 80%
    `}
`
const ImageContainer = styled(Flex)<{ $invert: boolean }>`
  order: ${({ $invert }) => ($invert ? 2 : 1)};
  opacity: ${(props) => props.theme.opacity.primary};
  max-width: 800px;

  ${laptop`  
    width: 50%;
    `}
`

const TextContainer = styled(Flex)`
  margin: 2rem 0;
  ${laptop`  
    margin: 0;
     width: 50%;
    `}
`

const Text = styled(Flex)`
  max-width: 580px;
  text-align: center;
  ${laptop`  
    text-align: left;
    `}
`

export const CourseBanner: FC<CourseBannerProps> = ({
  imageUrl,
  name,
  text,
  invert,
}) => {
  return (
    <Wrapper $width='100%'>
      <Container
        $width='90%'
        $direction='column'
        $justifyContent='center'
        $alignItems='center'
      >
        <ImageContainer $invert={invert} $width='100' $justifyContent='center'>
          <Image
            $width='100%'
            $borderRadius='8px'
            $height='100%'
            alt='students'
            src={`${hostPrefix}${imageUrl}`}
          />
        </ImageContainer>
        <TextContainer
          $width='100%'
          $justifyContent='center'
          $alignItems='center'
        >
          <Text $direction='column'>
            <Typography
              $margin='0 0 1.5rem 0'
              $size='extraLarge'
              $weight='bold'
            >
              {titleCase(name)}
            </Typography>
            <Typography $size='medium' $weight='medium'>
              {text}
            </Typography>
          </Text>
        </TextContainer>
      </Container>
    </Wrapper>
  )
}
