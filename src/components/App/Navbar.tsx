import { ChevronSwitcher } from '@/components/App/ChevronSwitcher'
import { CoursesList } from '@/components/App/CoursesList'
import { EmailButton } from '@/components/App/EmailButton'
import { LanguagesSelector } from '@/components/App/LanguagesSelector'
import { Logo } from '@/components/App/Logo'
import { MobileMenu } from '@/components/App/MobileMenu'
import { Button } from '@/components/ui/Button'
import { Flex } from '@/components/ui/Flex'
import { Typography } from '@/components/ui/Typography'
import { ROUTES } from '@/constants/routes'
import { useMenuContext } from '@/context/menuContext'
import { useTranslate } from '@/hooks/useTranslate'
import { laptop } from '@/styles/breakpoints'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

const MobileMenuContainer = styled(Flex)`
  ${laptop`
    display: none;
  `}
`

const Nav = styled(Flex)`
  position: relative;
  background-color: ${(props) => props.theme.color.backgroundPrimary};
  box-shadow: ${(props) => props.theme.boxShadow.primary};
`

const NavItem = styled(Button)`
  color: inherit;
  text-decoration: none;
  background: none;
  border: none;
  font: inherit;
`
const Option = styled(Flex)`
  position: relative;
  min-width: fit-content;
  cursor: pointer;
`

const MobileMenuButton = styled(NavItem)`
  padding: 0;

  ${laptop`
    display: none;
  `};
`

const LogoContainer = styled(Flex)`
  ${laptop`
   width: fit-content;
`}
`

const LinksContainer = styled(Flex)`
  display: none;
  ${laptop`
    display: flex;
  `}
`

const ListContainer = styled(Flex)`
  position: absolute;
  top: 48px;
  margin-top: ${(props) => props.theme.spacing.regular};
  border-radius: ${(props) => props.theme.borderRadius.regular};
`

export const Navbar = () => {
  const { showMobile, setShowMobile, showCourses, setShowCourses } =
    useMenuContext()

  const { translate } = useTranslate()
  const text = translate.components.navbar

  return (
    <>
      <Nav as='nav' $alignItems='center' $justifyContent='center' $width='100%'>
        <Flex
          $height='100px'
          $justifyContent='space-between'
          $alignItems='center'
          $width='100%'
          $margin='0 1.5rem'
        >
          <LogoContainer
            $alignItems='center'
            $justifyContent='space-between'
            $width='100%'
          >
            <Logo />
            <Flex $alignItems='center'>
              <MobileMenuButton
                $size='medium'
                $variant='link'
                onClick={() => setShowMobile(true)}
              >
                <FontAwesomeIcon icon={faBars} size='2xl' />
              </MobileMenuButton>
            </Flex>
          </LogoContainer>
          <LinksContainer $alignItems='center' $gap='1.75rem'>
            <NavItem
              $variant='link'
              $size='medium'
              as={RouterLink}
              to={ROUTES.CONCERTS}
            >
              <Typography $isUpperCase={true} $size='small' $weight='semibold'>
                {text.links.concerts}
              </Typography>
            </NavItem>
            <NavItem
              $variant='link'
              $size='medium'
              as={RouterLink}
              to={ROUTES.ABOUT}
            >
              <Typography $isUpperCase={true} $size='small' $weight='semibold'>
                {text.links.about}
              </Typography>
            </NavItem>
            <Option $alignItems='center' $gap='0.5rem'>
              <NavItem
                $variant='link'
                $size='medium'
                onClick={() =>
                  setShowCourses((prevState: boolean) => !prevState)
                }
              >
                <Typography
                  $isUpperCase={true}
                  $size='small'
                  $weight='semibold'
                >
                  {text.links.courses}
                </Typography>
              </NavItem>
              <ChevronSwitcher show={showCourses} setShow={setShowCourses} />
              {showCourses && (
                <ListContainer $direction='column'>
                  <CoursesList />
                </ListContainer>
              )}
            </Option>
            <Option $alignItems='center' $padding='0.75rem 1.5rem'>
              <LanguagesSelector />
            </Option>
            <EmailButton />
          </LinksContainer>
        </Flex>

        <MobileMenuContainer>
          {showMobile && <MobileMenu />}
        </MobileMenuContainer>
      </Nav>
    </>
  )
}
