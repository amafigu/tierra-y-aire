import { Logo } from '@/components/App/Logo'
import { Flex } from '@/components/ui/Flex'
import { Typography } from '@/components/ui/Typography'
import { facebookUrl, instagramUrl, youtubeUrl } from '@/constants/midia'
import { navigationMenuItems } from '@/constants/navigationMenuItems'
import { ROUTES } from '@/constants/routes'
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
  padding-top: ${(props) => props.theme.spacing.semiExtraLarge};
  text-align: center;

  ${tablet`
    padding-top: ${(props) => props.theme.spacing.huge};
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

const StyledLink = styled(Link)`
  padding: ${(props) => props.theme.spacing.smallest} 0;
`

const StyledContent = styled(Typography)`
  font-size: ${(props) => props.theme.font.size.small};
  color: ${(props) => props.theme.color.light};

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
export const Footer: FC = () => {
  const translate = useTranslate()
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
          <StyledLink to={ROUTES.ABOUT}>
            <StyledContent>
              {camelCaseToTitleCase(text.linksColumn.about)}
            </StyledContent>
          </StyledLink>
        </Column>
        <Column $direction='column' $width='100%'>
          <Title $size='medium' $weight='semibold'>
            {camelCaseToTitleCase(text.coursesColumn.title)}
          </Title>
          {navigationMenuItems.map((item) => (
            <StyledLink to={item.ref} key={item.name}>
              <StyledContent>
                {camelCaseToTitleCase(
                  text.coursesColumn[
                    item.name as keyof typeof text.coursesColumn
                  ]
                )}
              </StyledContent>
            </StyledLink>
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
      <Flex
        $direction='column'
        $alignItems='center'
        $padding='0 1.5rem'
        $margin='2rem 0 4.5rem 0'
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
      </Flex>
    </Wrapper>
  )
}
