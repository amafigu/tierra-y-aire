import { EmailButton } from '@/components/App/EmailButton'
import { LanguagesSelector } from '@/components/App/LanguagesSelector'
import { MobileMenu } from '@/components/App/MobileMenu'
import { Button } from '@/components/ui/Button'
import { ChevronToggler } from '@/components/ui/ChevronToggler'
import { CoursesList } from '@/components/ui/CoursesList'
import { Flex } from '@/components/ui/Flex'
import { Image } from '@/components/ui/Image'
import { Typography } from '@/components/ui/Typography'
import { logo } from '@/constants/images'
import { ROUTES } from '@/constants/routes'
import { useMenuContext } from '@/context/menuContext'
import { useTranslate } from '@/hooks/useTranslate'
import { laptop, tablet } from '@/styles/breakpoints'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MobileMenuContainer = styled(Flex)`
  ${laptop`
    display: none;
  `}
`

const Nav = styled(Flex)`
  background-color: ${(props) => props.theme.color.backgroundPrimary};
`

const Option = styled(Flex)`
  position: relative;
  min-width: fit-content;
  cursor: pointer;
`

const NavItem = styled(Button)`
  color: inherit;
  text-decoration: none;
  background: none;
  border: none;
  font: inherit;
`

const MobileMenuButton = styled(NavItem)`
  padding: 0;

  ${laptop`
    display: none;
  `};
`

const LinksContainer = styled(Flex)`
  display: none;
  margin-right: 3rem;
  ${laptop`
    display: flex;
  `}
`

const Logo = styled(Image)`
  width: 64px;
  height: 64px;

  ${tablet`
    width: 72px;
    height: 72px;
    `}
`

const ListContainer = styled(Flex)`
  position: absolute;
  margin-top: ${(props) => props.theme.spacing.regular};
  border-radius: ${(props) => props.theme.borderRadius.regular};
`

export const Navbar = () => {
  const { showMobile, setShowMobile, showCourses, setShowCourses } =
    useMenuContext()

  const translate = useTranslate()
  const text = translate.components.navbar

  return (
    <>
      <Flex $alignItems='center' $justifyContent='center'>
        <Nav
          as='nav'
          $height='100px'
          $justifyContent='space-between'
          $alignItems='center'
          $width='100%'
        >
          <Flex $alignItems='center'>
            <Flex $alignItems='center'>
              <Button $size='medium' $variant='link' as={Link} to={ROUTES.HOME}>
                <Logo
                  $width='64px'
                  $height='64px'
                  $borderRadius='50%'
                  src={`/images/${logo}`}
                  alt='logo'
                />
              </Button>
              <Flex $direction='column' $justifyContent='center'>
                <Typography $weight='bold' $size='medium' $isUpperCase={true}>
                  tierra
                </Typography>
                <Typography $weight='bold' $size='medium' $isUpperCase={true}>
                  y aire
                </Typography>
              </Flex>
            </Flex>
            <Flex $alignItems='center'>
              <MobileMenuButton
                $size='medium'
                $variant='link'
                onClick={() => setShowMobile(true)}
              >
                <FontAwesomeIcon icon={faBars} size='2xl' />
              </MobileMenuButton>
            </Flex>
          </Flex>

          <LinksContainer $alignItems='center' $gap='1.75rem'>
            <NavItem $variant='link' $size='medium' as={Link} to={ROUTES.ABOUT}>
              <Typography $isUpperCase={true} $size='small' $weight='semibold'>
                {text.links.about}
              </Typography>
            </NavItem>
            <Option $alignItems='center'>
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
              <ChevronToggler show={showCourses} setShow={setShowCourses} />
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
        </Nav>

        <MobileMenuContainer>
          {showMobile && <MobileMenu />}
        </MobileMenuContainer>
      </Flex>
    </>
  )
}
