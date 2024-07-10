import { Button } from '@/components/ui/Button'
import { Flex } from '@/components/ui/Flex'
import { Typography } from '@/components/ui/Typography'
import { useTranslate } from '@/hooks/useTranslate'
import { laptop } from '@/styles/breakpoints'
import { FC, RefObject } from 'react'
import styled from 'styled-components'

interface Sections {
  name: string
  ref: RefObject<HTMLDivElement>
}

interface SectionsNavigatorProps {
  items: Sections[]
}

const Menu = styled(Flex)`
  display: none;
  background-color: ${(props) => props.theme.color.backgroundTertiary};
  ${laptop`
    display: flex;
    `}
`

const ListItem = styled(Button)`
  margin: 0 ${(props) => props.theme.spacing.regular};
  padding: 0;
`

export const SectionsNavigator: FC<SectionsNavigatorProps> = ({ items }) => {
  const translate = useTranslate()
  const text = translate.components.navigationMenu

  const navigateToSection = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Menu as='nav' $width='100vw' $height='80px' $justifyContent='center'>
      <Flex as='ul' $justifyContent='center' $alignItems='center'>
        {items.map((item) => (
          <ListItem
            as='li'
            $size='small'
            $variant='link'
            onClick={() => navigateToSection(item.ref)}
            key={item.name}
          >
            <Typography $size='small' $weight='medium' $isUpperCase={true}>
              {text[item.name]}
            </Typography>
          </ListItem>
        ))}
      </Flex>
    </Menu>
  )
}
