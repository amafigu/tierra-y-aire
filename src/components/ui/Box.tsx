import type { CSSProperties } from 'react'
import { styled } from 'styled-components'

type Props = {
  $margin?: CSSProperties['margin']
  $padding?: CSSProperties['padding']
  $height?: CSSProperties['height']
  $width?: CSSProperties['width']
  $borderRadius?: CSSProperties['borderRadius']
  $border?: CSSProperties['border']
  $boxShadow?: CSSProperties['boxShadow']
}

export const Box = styled.div<Props>`
  display: block;
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
  height: ${(props) => props.$height};
  width: ${(props) => props.$width};
  borderradius: ${(props) => props.$borderRadius};
  border: ${(props) => props.$border};
  boxshadow: ${(props) => props.$boxShadow};
`
