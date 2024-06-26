import { Box } from '@/components/ui/Box'
import { Flex } from '@/components/ui/Flex'
import { Typography } from '@/components/ui/Typography'
import { philosophyBackground } from '@/constants/backgroundImages'
import { hostPrefix } from '@/constants/images'
import { useTranslate } from '@/hooks/useTranslate'
import { laptop } from '@/styles/breakpoints'
import { forwardRef } from 'react'
import styled from 'styled-components'

const Section = styled(Flex)<{ $backgroundImage: string }>`
  position: relative;
  min-height: 600px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    opacity: 0.3;
    background: url(${(props) => props.$backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  ${laptop`
    justify-content: flex-start;
  `}
`

const Container = styled(Flex)`
  position: relative;
  z-index: 2;
  max-width: 600px;
  width: ${(props) => props.theme.dimensions.widthMobilePage};

  ${laptop`
    width: ${(props) => props.theme.dimensions.widthDesktopPage};
    margin: 0 3.5rem;
  `}
`

const Content = styled(Box)`
  color: ${(props) => props.theme.color.secondary};
`

export const PhilosophySection = forwardRef<HTMLDivElement>((_, ref) => {
  const translate = useTranslate()
  const text = translate.pages.about

  return (
    <Section
      ref={ref}
      as='section'
      $width='100%'
      $alignItems='center'
      $justifyContent='center'
      $backgroundImage={`${hostPrefix}${philosophyBackground}`}
    >
      <Container
        $direction='column'
        $gap='1.5rem'
        $margin='1.5rem 0'
        $width='90%'
      >
        <Typography $size='large' $weight='extraBold'>
          {text.ourPhilosophyTitle}
        </Typography>
        <Typography $size='semiLarge' $weight='semibold' $color='secondary'>
          {text.ourPhilosophySubtitle}
        </Typography>
        <Content $width='100%'>
          <Typography $size='semiMedium'>{text.ourPhilosophyFirst}</Typography>
          <Typography $size='semiMedium'>{text.ourPhilosophySecond}</Typography>
        </Content>
      </Container>
    </Section>
  )
})
