import { Button } from '@/components/ui/Button'
import { Flex } from '@/components/ui/Flex'
import { Image } from '@/components/ui/Image'
import { Typography } from '@/components/ui/Typography'
import { hostPrefix, logo } from '@/constants/images'
import { ROUTES } from '@/constants/routes'
import { tablet } from '@/styles/breakpoints'
import { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

const Link = styled(Button)`
  padding: 0;
  margin-right: ${(props) => props.theme.spacing.regular};
`
const Img = styled(Image)`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  ${tablet`
    width: 72px;
    height: 72px;
    `}
`

export const Logo: FC = () => {
  return (
    <Flex $alignItems='center'>
      <Link $size='medium' $variant='link' as={RouterLink} to={ROUTES.HOME}>
        <Img
          $width='64px'
          $height='64px'
          $borderRadius='50%'
          src={`${hostPrefix}${logo}`}
          alt='logo'
        />
      </Link>
      <Flex $direction='column' $justifyContent='center'>
        <Typography $weight='bold' $size='medium' $isUpperCase={true}>
          tierra
        </Typography>
        <Typography $weight='bold' $size='medium' $isUpperCase={true}>
          y aire
        </Typography>
      </Flex>
    </Flex>
  )
}
