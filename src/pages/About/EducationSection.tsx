import { Flex } from '@/components/ui/Flex'
import { Typography } from '@/components/ui/Typography'
import { educationBanner } from '@/constants/backgroundImages'
import { hostPrefix } from '@/constants/images'
import { useTranslate } from '@/hooks/useTranslate'
import { desktop } from '@/styles/breakpoints'
import { forwardRef } from 'react'
import styled from 'styled-components'

const Section = styled(Flex)`
  margin: 0;
  background-color: ${(props) => props.theme.color.backgroundSecondary};

  ${desktop`
    margin: 60px; 
`}
`

const Container = styled.div`
  position: relative;
  width: 80%;
  margin: 80px 0;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: ${(props) => props.theme.dimensions.widthMobilePage};
    margin: ${(props) => props.theme.spacing.large};
  }
`

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: ${(props) => props.theme.borderRadius.regular};
  opacity: ${(props) => props.theme.opacity.primary};

  @media (max-width: 576px) {
    height: 300px;
    object-position: left;
  }
`

const TextContainer = styled(Flex)`
  position: absolute;
  right: 0;
  bottom: -20px;
  height: auto;
  max-width: 600px;
  background: ${(props) => props.theme.color.backgroundTertiary};
  border-radius: ${(props) => props.theme.borderRadius.regular};

  @media (max-width: 1440px) {
    margin-top: 40px;
    font-size: ${(props) => props.theme.font.size.small};
  }

  @media (max-width: 1024px) {
    width: 76%;
    margin-top: 20px;
    font-size: ${(props) => props.theme.font.size.small};
  }

  @media (max-width: 576px) {
    position: static;
    right: unset;
    bottom: unset;
    width: 100%;
    margin-top: 40px;
  }
`

const Text = styled(Typography)`
  width: 100%;
  margin: ${(props) => props.theme.spacing.regular};
  color: ${(props) => props.theme.color.secondary};
  opacity: 0.9;
  font-size: ${(props) => props.theme.font.size.semiMedium};
  font-weight: ${(props) => props.theme.font.weight.normal};

  @media (max-width: 576px) {
    margin: ${(props) => props.theme.spacing.small};
    font-size: ${(props) => props.theme.font.size.small};
  }
`

export const EducationSection = forwardRef<HTMLDivElement>((_, ref) => {
  const translate = useTranslate()
  const text = translate.pages.about

  return (
    <Section ref={ref} as='section' $direction='column' $alignItems='center'>
      <Container>
        <Image src={`${hostPrefix}${educationBanner}`} alt='inspiration section' />
        <TextContainer
          $width='100%'
          $justifyContent='center'
          $alignItems='center'
        >
          <Text $color='secondary' $size='small'>
            {text.firstImageCard}
          </Text>
        </TextContainer>
      </Container>
    </Section>
  )
})
