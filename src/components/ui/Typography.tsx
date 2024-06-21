import { styled } from 'styled-components'

import type { FontSize } from '@/constants/fontSizes'
import { fontSizes } from '@/constants/fontSizes'

import type { FontWeight } from '@/constants/fontWeights'
import { fontWeights } from '@/constants/fontWeights'

type Props = {
  $family?: 'serif' | 'sansSerif'
  $size?: FontSize
  $weight?: FontWeight
  $isUpperCase?: boolean
}

export const Typography = styled.span<Props>`
  font-weight: ${(props) =>
    props.$weight ? fontWeights[props.$weight] : 'inherit'};
  font-family: ${(props) =>
    props.$family ? props.theme.font[props.$family] : 'inherit'};
  font-size: ${(props) => (props.$size ? fontSizes[props.$size] : 'inherit')};
  text-transform: ${(props) => (props.$isUpperCase ? 'uppercase' : 'inherit')};
`
