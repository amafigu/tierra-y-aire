import { Button } from '@/components/ui/Button'
import { Flex } from '@/components/ui/Flex'
import { Typography } from '@/components/ui/Typography'
import { navigationMenuItems } from '@/constants/navigationMenuItems'
import { useMenuContext } from '@/context/menuContext'
import { useOnNavigate } from '@/hooks/useOnNavigate'
import { useTranslate } from '@/hooks/useTranslate'
import { laptop } from '@/styles/breakpoints'
import { FC } from 'react'
import styled from 'styled-components'

const List = styled(Flex)`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: ${(props) => props.theme.color.strockePrimary};
  z-index: ${(props) => props.theme.zIndex.dropdown};
  border-radius: ${(props) => props.theme.borderRadius.small};

  ${laptop`
    background-color:  ${(props) => props.theme.color.backgroundPrimary};
    box-shadow:${(props) => props.theme.boxShadow.primary};
    `}
`

const ListItem = styled(Button)`
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
  padding: ${(props) => props.theme.spacing.small} 0;
  margin: 0 ${(props) => props.theme.spacing.small};
  overflow: hidden;
  border-radius: 0;
  &:hover {
    color: ${(props) => props.theme.color.branding};
  }
  list-style: none;
`

export const CoursesList: FC = () => {
  const { onNavigate } = useOnNavigate()
  const { setShowMobile, setShowCourses } = useMenuContext()
  const translate = useTranslate()
  const text = translate.pages.courses

  return (
    <List
      aria-label='courses options'
      as='ul'
      $direction='column'
      $alignItems='flex-start'
    >
      {navigationMenuItems.map((item) => (
        <ListItem
          as='li'
          $variant='link'
          $size='medium'
          key={item.name}
          onClick={() => onNavigate([setShowMobile, setShowCourses], item.ref)}
        >
          <Typography $weight='semibold'>{text[item.name].title}</Typography>
        </ListItem>
      ))}
    </List>
  )
}
