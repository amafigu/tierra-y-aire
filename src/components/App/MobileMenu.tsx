import { ChevronSwitcher } from '@/components/App/ChevronSwitcher'
import { CoursesList } from '@/components/App/CoursesList'
import { EmailButton } from '@/components/App/EmailButton'
import { LanguagesSelector } from '@/components/App/LanguagesSelector'
import { ROUTES } from '@/constants/routes'
import { useMenuContext } from '@/context/menuContext'
import { useOnNavigate } from '@/hooks/useOnNavigate'
import { useTranslate } from '@/hooks/useTranslate'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import styled from 'styled-components'
import { Box } from '../ui/Box'
import { Flex } from '../ui/Flex'
import { Typography } from '../ui/Typography'

const Menu = styled(Flex)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: ${(props) => props.theme.zIndex.mobileMenu};
  width: ${(props) => props.theme.dimensions.widthMobilePage};
  min-height: fit-content;
  max-height: 100%;
  overflow-y: auto;
  background-color: ${(props) => props.theme.color.backgroundTertiary};
  border-bottom-left-radius: ${(props) => props.theme.borderRadius.small};
`

const List = styled(Flex)`
  width: 100%;
  margin-bottom: ${(props) => props.theme.spacing.regular};
  padding: 0;
  overflow-y: auto;
`

const ListItem = styled(Flex)`
  padding: 20px;
  cursor: pointer;
  justify-content: flex-start;
  align-items: flex-start;

  a {
    width: 100%;
  }
`

const ContainerItem = styled(ListItem)`
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`

const CloseMenuItem = styled(ListItem)`
  padding-right: 2rem;
  text-align: right;
  color: ${(props) => props.theme.color.branding};
  border-bottom: none;
  justify-content: flex-end;
`

const EmailBtn = styled(EmailButton)`
  color: green;
  width: 100%;
`
export const MobileMenu: FC = () => {
  const { onNavigate } = useOnNavigate()
  const { translate } = useTranslate()
  const text = translate.components.navbar
  const { showMobile, setShowMobile, showCourses, setShowCourses } =
    useMenuContext()

  return (
    <Flex $justify-content='center' $align-items='center' $width='60%'>
      <Menu
        as='nav'
        $direction='column'
        $align-items='flex-start'
        aria-label='Mobile'
      >
        <List as='ul' $direction='column'>
          <CloseMenuItem
            $justifyContent='center'
            $alignItems='center'
            as='li'
            onClick={() => setShowMobile(false)}
          >
            <FontAwesomeIcon icon={faX} />
          </CloseMenuItem>
          <ContainerItem as='li'>
            <LanguagesSelector />
          </ContainerItem>
          <ListItem
            as='li'
            onClick={() => onNavigate([setShowMobile], ROUTES.CONCERTS)}
          >
            <Typography $isUpperCase={true}>{text.links.concerts}</Typography>
          </ListItem>
          <ListItem
            as='li'
            onClick={() => onNavigate([setShowMobile], ROUTES.ABOUT)}
          >
            <Typography $isUpperCase={true}>{text.links.about}</Typography>
          </ListItem>
          <ContainerItem
            as='li'
            style={{
              borderBottom: showMobile ? 'none' : undefined,
            }}
            onClick={() => setShowCourses((prevState: boolean) => !prevState)}
          >
            <Box $margin={showCourses ? '0 1rem 1rem 0' : '0 1rem 0 0'}>
              <Typography $isUpperCase={true} $margin='0 1rem 0 0'>
                {text.links.courses}
              </Typography>
              <ChevronSwitcher show={showCourses} setShow={setShowCourses} />
            </Box>
            {showCourses && <CoursesList />}
          </ContainerItem>
          <ListItem as='li' $grow='1'>
            <EmailBtn />
          </ListItem>
        </List>
      </Menu>
    </Flex>
  )
}
