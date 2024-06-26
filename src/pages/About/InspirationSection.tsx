import { Box } from '@/components/ui/Box'
import { Flex } from '@/components/ui/Flex'
import { Image } from '@/components/ui/Image'
import { Typography } from '@/components/ui/Typography'
import { hostPrefix, logo } from '@/constants/images'
import { useTranslate } from '@/hooks/useTranslate'
import { desktop, laptop, tablet } from '@/styles/breakpoints'
import { FC } from 'react'
import styled from 'styled-components'

const Section = styled(Flex)`
  background-color: ${(props) => props.theme.color.backgroundSecondary};
  margin: 0;

  ${laptop`    
      margin: 0 60px 92px 60px;
  `}
`

const Container = styled(Flex)`
  width: 100%;
  margin-bottom: ${(props) => props.theme.spacing.regular};
  gap: ${(props) => props.theme.spacing.regular};

  ${laptop`
    flex-direction: row;
    gap: 0;
    `}

  ${desktop`
    width: ${(props) => props.theme.dimensions.widthDesktopPage};
    `}
`

const Title = styled(Typography)`
  margin-top: ${(props) => props.theme.spacing.semiRegular};

  ${tablet`
    margin-top: 0;
    `}

  ${desktop`
  font-size: ${(props) => props.theme.font.size.huge};
  font-weight: ${(props) => props.theme.font.weight.extraBold};
    `}
`

const TextContainer = styled(Box)`

  ${laptop`    
    width: 66%;
    padding: 0;
    margin-top: ${(props) => props.theme.spacing.large};
    `}

  }
`

export const InspirationSection: FC = () => {
  const translate = useTranslate()
  const text = translate.pages.about.inspirationAndEducation

  return (
    <Section as='section' $direction='column' $alignItems='center'>
      <Container $alignItems='center' $direction='column'>
        <Flex $width='90%' $direction='column'>
          <Box>
            <Image
              $width='82px'
              $height='82px'
              $borderRadius='50%'
              alt='logo'
              src={`${hostPrefix}${logo}`}
            />
          </Box>
          <Title $size='large' $weight='extraBold'>
            {text.title}
          </Title>
        </Flex>
        <TextContainer $width='90%'>
          <Box>
            <Typography $size='semiMedium' $weight='normal'>
              {text.firstParagraph}
            </Typography>
            <Typography $size='semiMedium'>{text.secondParagraph}</Typography>
          </Box>
        </TextContainer>
      </Container>
    </Section>
  )
}
