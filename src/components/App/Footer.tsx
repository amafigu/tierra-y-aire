import { Logo } from '@/components/App/Logo'
import { Flex } from '@/components/ui/Flex'
import { Typography } from '@/components/ui/Typography'
import { facebookUrl, instagramUrl, youtubeUrl } from '@/constants/midia'
import { navigationMenuItems } from '@/constants/navigationMenuItems'
import { ROUTES } from '@/constants/routes'
import { useMenuContext } from '@/context/menuContext'
import { useOnNavigate } from '@/hooks/useOnNavigate'
import { useTranslate } from '@/hooks/useTranslate'
import { laptop, tablet } from '@/styles/breakpoints'
import { camelCaseToTitleCase } from '@/utils/utils'
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled(Flex)`
  background-color: ${(props) => props.theme.color.backgroundPrimary};
`

const Columns = styled(Flex)`
  gap: 2rem;
  height: auto;
  padding: ${(props) => props.theme.spacing.semiExtraLarge} 0;
  text-align: center;

  ${tablet`
    padding-top: ${(props) => props.theme.spacing.huge} 0;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    `}

  ${laptop`
      padding-right: 4rem;
      padding-left: 4rem;
    `}
`

const Column = styled(Flex)`
  width: ${(props) => props.theme.dimensions.widthMobilePage};
`

const IconsContainer = styled(Flex)`
  ${tablet`
    gap: 40px;
    `}
`

const Title = styled(Typography)`
  margin-bottom: ${(props) => props.theme.spacing.small};
`

const StyledContent = styled(Typography)`
  font-size: ${(props) => props.theme.font.size.small};
  padding: ${(props) => props.theme.spacing.smallest} 0;
  color: ${(props) => props.theme.color.light};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.color.branding};
  }
`
const LogoTeaser = styled(Typography)`
  margin-top: 1.5rem;
  width: 60%;

  ${tablet`
  width: 100%;   
  text-align: left; 
  `}
`

const LogoColumn = styled(Column)`
  ${tablet`
      align-items: flex-start;
      `}
`

const Copyright = styled(Flex)`
  ${laptop`
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    span {
      margin: 0;
    }
    `}
`

export const Footer: FC = () => {
  const { translate } = useTranslate()
  const { onNavigate } = useOnNavigate()
  const { setShowMobile, setShowCourses } = useMenuContext()
  const text = translate.components.footer

  return (
    <Wrapper as='footer' $direction='column' $alignItems='center' $width='100%'>
      <Columns
        $direction='column'
        $alignItems='center'
        $justifyContent='flex-start'
        $padding='0 4rem'
      >
        <LogoColumn $direction='column' $alignItems='center'>
          <Logo />
          <LogoTeaser $size='small' $color='light'>
            {text.teaserText}
          </LogoTeaser>
        </LogoColumn>
        <Column $direction='column' $width='100%'>
          <Title $size='medium' $weight='semibold'>
            {camelCaseToTitleCase(text.linksColumn.title)}
          </Title>
          <StyledContent
            onClick={() =>
              onNavigate([setShowMobile, setShowCourses], ROUTES.ABOUT)
            }
          >
            {camelCaseToTitleCase(text.linksColumn.about)}
          </StyledContent>
        </Column>
        <Column $direction='column' $width='100%'>
          <Title $size='medium' $weight='semibold'>
            {camelCaseToTitleCase(text.coursesColumn.title)}
          </Title>
          {navigationMenuItems.map((item) => (
            <StyledContent
              key={item.name}
              onClick={() =>
                onNavigate([setShowMobile, setShowCourses], item.ref)
              }
            >
              {camelCaseToTitleCase(
                text.coursesColumn[
                  item.name as keyof typeof text.coursesColumn
                ],
              )}
            </StyledContent>
          ))}
        </Column>
        <Column $direction='column'>
          <Title $size='medium' $weight='semibold'>
            {camelCaseToTitleCase(text.socialMediaLinksColumn.title)}
          </Title>
          <IconsContainer $gap='3rem' $margin='auto'>
            <Link to={instagramUrl} target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faInstagram} size='2x' color='#ed068a' />
            </Link>
            <Link to={facebookUrl} target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faFacebookF} size='2x' color='#ed068a' />
            </Link>
            <Link to={youtubeUrl} target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faYoutube} size='2x' color='#ed068a' />
            </Link>
          </IconsContainer>
        </Column>
      </Columns>
      <Copyright
        $direction='column'
        $alignItems='center'
        $padding='0 1.5rem'
        $margin='0 0 4.5rem 0'
      >
        <Typography
          $size='small'
          $weight='medium'
          $color='light'
          $textAlign='center'
          $margin='0 0 1rem 0'
        >
          {text.copyrightFirst}
        </Typography>
        <Typography
          $size='small'
          $weight='medium'
          $color='light'
          $textAlign='center'
        >
          {text.copyrightSecond}
        </Typography>
      </Copyright>
    </Wrapper>
  )
}
