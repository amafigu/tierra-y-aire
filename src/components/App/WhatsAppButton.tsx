import { whatsappUrl } from '@/constants/midia'
import { useMenuContext } from '@/context/menuContext'
import { useTranslate } from '@/hooks/useTranslate'
import { laptop } from '@/styles/breakpoints' // Import your breakpoint
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from '../ui/Flex'
import { Typography } from '../ui/Typography'

const WhatsAppBtn = styled(Flex)`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 100vw;
  transform: none;
  border-radius: 2px;
  background-color: ${(props) => props.theme.color.branding};

  color: ${(props) => props.theme.color.backgroundPrimary};
  z-index: ${(props) => props.theme.zIndex.whatsappButton};

  ${laptop`
    position: fixed;
    margin: 0;
    padding: ${(props) => props.theme.spacing.smallest}
    ${(props) => props.theme.spacing.semiLarge};
    top: 50%;
    right: -112px;
    width: 218px;
    height: 40px;
    transform: translateY(-50%) rotate(90deg);
    border-radius: ${(props) => props.theme.borderRadius.regular};
  `}
`

const Container = styled(Flex)`
  ${laptop`margin: 0;
    `}
`

export const WhatsAppButton: FC = () => {
  const translate = useTranslate()
  const text = translate.components.whatsAppButton
  const { showMobile } = useMenuContext()

  return (
    !showMobile && (
      <WhatsAppBtn
        as={Link}
        to={whatsappUrl}
        $justifyContent='center'
        $alignItems='center'
        aria-label='send whatsapp'
      >
        <Container
          $alignItems='center'
          $justifyContent='center'
          $margin='0.5rem 1rem'
          $width='100%'
        >
          <FontAwesomeIcon icon={faWhatsapp} size='2x' />
          <Typography $margin='0 0 0 0.5rem'>{text.text}</Typography>
        </Container>
      </WhatsAppBtn>
    )
  )
}
