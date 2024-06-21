import type { CSSProperties } from 'react'
import { styled } from 'styled-components'

type Props = {
  $direction?: CSSProperties['flexDirection']
  $alignItems?: CSSProperties['alignItems']
  $justifyContent?: CSSProperties['justifyContent']
  $grow?: CSSProperties['flexGrow']
  $shrink?: CSSProperties['flexShrink']
  $basis?: CSSProperties['flexBasis']
  $gap?: CSSProperties['gap']
  $margin?: CSSProperties['margin']
  $padding?: CSSProperties['padding']
  $height?: CSSProperties['height']
  $width?: CSSProperties['width']
}

export const Flex = styled.div<Props>`
  flex-grow: ${(props) => props.$grow};
  flex-shrink: ${(props) => props.$shrink};
  flex-basis: ${(props) => props.$basis};
  display: flex;
  flex-direction: ${(props) => props.$direction};
  align-items: ${(props) => props.$alignItems};
  justify-content: ${(props) => props.$justifyContent};
  gap: ${(props) => props.$gap};
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
  height: ${(props) => props.$height};
  width: ${(props) => props.$width};
`
