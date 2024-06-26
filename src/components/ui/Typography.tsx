import { CSSProperties, styled } from 'styled-components'

import type { Color, Opacity } from '@/constants/colors'
import { colors, opacities } from '@/constants/colors'

import type { FontSize } from '@/constants/fontSizes'
import { fontSizes } from '@/constants/fontSizes'

import type { FontWeight } from '@/constants/fontWeights'
import { fontWeights } from '@/constants/fontWeights'

type Props = {
  $overflow?: CSSProperties['overflow']
  $margin?: CSSProperties['margin']
  $padding?: CSSProperties['padding']
  $family?: 'serif' | 'sansSerif' | 'primary'
  $size?: FontSize
  $weight?: FontWeight
  $color?: Color
  $isUpperCase?: boolean
  $style?: CSSProperties['fontStyle']
  $textAlign?: CSSProperties['textAlign']
  $opacity?: Opacity
}

export const Typography = styled.span<Props>`
  line-height: 128%;
  font-weight: ${(props) => props.$weight && fontWeights[props.$weight]};
  font-family: ${(props) => props.$family};
  font-size: ${(props) => props.$size && fontSizes[props.$size]};
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
  overflow: ${(props) => props.$overflow};
  color: ${(props) => (props.$color ? colors[props.$color] : 'inherit')};
  text-transform: ${(props) => (props.$isUpperCase ? 'uppercase' : 'inherit')};
  font-style: ${(props) => props.$style};
  text-align: ${(props) => props.$textAlign};
  opacity: ${(props) => props.$opacity && opacities[props.$opacity]};
`
