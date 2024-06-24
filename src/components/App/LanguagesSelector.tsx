import { useLocaleContext } from '@/context/localeContext'
import { useMenuContext } from '@/context/menuContext'
import { FC } from 'react'
import styled from 'styled-components'
import { Typography } from '../ui/Typography'

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  border: none;
  cursor: pointer;
  justify-content: center;
`

const ListItem = styled.li`
  padding: ${(props) => props.theme.spacingSmall} 0;
  margin-right: 3rem;
  position: relative;
  color: ${(props) => props.theme.color.primary};
  &:last-child {
    margin-right: 0;
  }
  &:not(:last-child)::after {
    content: '|';
    position: absolute;
    right: -1.5rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${(props) => props.theme.color.primary};
  }

  &.active {
    color: ${(props) => props.theme.color.branding};

    &:not(:last-child)::after {
      color: ${(props) => props.theme.color.primary};
    }
  }
`

export const LanguagesSelector: FC = () => {
  const { setLanguage, language } = useLocaleContext()
  const { setShowMobile, setShowLanguages } = useMenuContext()

  const changeLanguage = (lang: 'es' | 'en') => {
    setLanguage(lang)
    setShowMobile(false)
    setShowLanguages(false)
  }

  const langOptions: ('es' | 'en')[] = ['es', 'en']

  return (
    <List aria-label='Languages selector'>
      {langOptions.map((option) => (
        <>
          <ListItem
            key={option}
            className={`listItem ${language === option ? 'active' : ''}`}
            onClick={() => changeLanguage(option)}
          >
            <Typography className='language'>{option.toUpperCase()}</Typography>
          </ListItem>
        </>
      ))}
    </List>
  )
}
