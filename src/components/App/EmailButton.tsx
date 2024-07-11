import { Button } from '@/components/ui/Button'
import { Typography } from '@/components/ui/Typography'
import { emailAddress } from '@/constants/midia'
import { useMenuContext } from '@/context/menuContext'
import { useTranslate } from '@/hooks/useTranslate'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const EmailBtn = styled(Button)`
  padding: 0;
`

export const EmailButton: FC = () => {
  const { translate } = useTranslate()
  const text = translate.components.navbar
  const { setShowMobile } = useMenuContext()

  return (
    <EmailBtn
      $size='medium'
      $variant='primary'
      onClick={() => setShowMobile(false)}
      aria-label='send email'
      as={Link}
      to={`mailTo:${emailAddress}`}
    >
      <Typography $isUpperCase={true} $margin='0.75rem 1.5rem'>
        {text.buttons.contact}
      </Typography>
    </EmailBtn>
  )
}
