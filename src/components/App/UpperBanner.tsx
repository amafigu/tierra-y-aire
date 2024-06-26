import { Flex } from '@/components/ui/Flex'
import { Typography } from '@/components/ui/Typography'
import { hostPrefix } from '@/constants/images'
import { laptop } from '@/styles/breakpoints'
import { camelCaseToTitleCase } from '@/utils/utils'
import { FC } from 'react'
import styled from 'styled-components'

const Container = styled(Flex)<{ $backgroundImage: string }>`
  background: url(${(props) => props.$backgroundImage});
  background-position: center;
  background-size: cover;
  overflow: hidden;
`

const Content = styled(Flex)`
  z-index: ${(props) => props.theme.zIndex.upperBanner};
`

const Title = styled(Typography)`
  margin-bottom: ${(props) => props.theme.spacing.large};
  opacity: ${(props) => props.theme.opacity.primary};
  font-size: ${(props) => props.theme.font.size.large};

  ${laptop`
    font-size: ${(props) => props.theme.font.size.huge};
  `}
`

const Details = styled(Typography)`
  width: 80%;
  font-size: ${(props) => props.theme.font.size.small};
  opacity: ${(props) => props.theme.opacity.primary};

  ${laptop`
    width: 50%;
    max-width: 600px;
    font-size: ${(props) => props.theme.font.size.medium};
    `}
`

interface UpperBannerProps {
  backgroundUrl: string
  title?: string
  text?: string
}

export const UpperBanner: FC<UpperBannerProps> = ({
  backgroundUrl,
  title = '',
  text = '',
}) => {
  return (
    <Container
      $justifyContent='center'
      $alignItems='center'
      $width='100%'
      $height='50vh'
      $backgroundImage={`${hostPrefix}${backgroundUrl}`}
    >
      <Content
        $width='80%'
        $direction='column'
        $alignItems='center'
        $justifyContent='center'
      >
        <Title $size='huge' $weight='extraBold'>
          {camelCaseToTitleCase(title)}
        </Title>
        <Details $size='semiMedium' $weight='normal' $color='secondary'>
          {text}
        </Details>
      </Content>
    </Container>
  )
}
