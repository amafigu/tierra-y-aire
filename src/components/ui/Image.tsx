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
  $objectFit?: CSSProperties['objectFit']
}

export const Image = styled.img<Props>`
  display: block;
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
  height: ${(props) => props.$height};
  width: ${(props) => props.$width};
  border-radius: ${(props) => props.$borderRadius};
  border: ${(props) => props.$border};
  box-shadow: ${(props) => props.$boxShadow};
  object-fit: ${(props) => props.$objectFit};
`
