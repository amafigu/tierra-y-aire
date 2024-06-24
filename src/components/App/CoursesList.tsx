import { navigationMenuItems } from '@/constants/navigationMenuItems'
import { useMenuContext } from '@/context/menuContext'
import { useOnNavigate } from '@/hooks/useOnNavigate'
import { useTranslate } from '@/hooks/useTranslate'
import { FC } from 'react'
import styled from 'styled-components'
import { Button } from '../ui/Button'
import { Flex } from '../ui/Flex'
import { Typography } from '../ui/Typography'

const List = styled(Flex)`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: ${(props) => props.theme.color.strockePrimary};
  z-index: ${(props) => props.theme.zIndex.dropdown};
  border-radius: ${(props) => props.theme.borderRadius.small};
`

const ListItem = styled(Button)`
  display: flex;
  flex-grow: 1;
  justifycontent: flex-start;
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
