import type { CSSProperties } from 'react'
import { styled } from 'styled-components'

type Props = {
  $grow?: CSSProperties['flexGrow']
  $shrink?: CSSProperties['flexShrink']
  $basis?: CSSProperties['flexBasis']
  $direction?: CSSProperties['flexDirection']
  $wrap?: CSSProperties['flexWrap']
  $alignItems?: CSSProperties['alignItems']
  $justifyContent?: CSSProperties['justifyContent']
  $gap?: CSSProperties['gap']
  $margin?: CSSProperties['margin']
  $padding?: CSSProperties['padding']
  $height?: CSSProperties['height']
  $width?: CSSProperties['width']
}

export const Flex = styled.div<Props>`
  display: flex;
  flex-grow: ${(props) => props.$grow};
  flex-shrink: ${(props) => props.$shrink};
  flex-basis: ${(props) => props.$basis};
  flex-direction: ${(props) => props.$direction};
  flex-wrap: ${(props) => props.$wrap};
  align-items: ${(props) => props.$alignItems};
  justify-content: ${(props) => props.$justifyContent};
  gap: ${(props) => props.$gap};
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
  height: ${(props) => props.$height};
  width: ${(props) => props.$width};
`
