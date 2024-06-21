import { css, styled } from 'styled-components'

import { fontSizes } from '@/constants/fontSizes'

const sizeStyle = {
  small: css`
    font-size: ${fontSizes.small};
    padding: 0.5rem 1rem;
    border-radius: 1rem;
  `,
  medium: css`
    font-size: ${fontSizes.medium};
    padding: 0.75rem 1.5rem;
    border-radius: 1.5rem;
  `,
  huge: css`
    font-size: ${fontSizes.large};
    padding: 1rem 2rem;
    border-radius: 2rem;
  `,
}

// Mail Button primary, WhatsAppButton secondary, CardLinks Terciary,
const variantStyle = {
  primary: css`
    color: ${(props) => props.theme.color.secondary};
    background-color: ${(props) => props.theme.color.backgroundButton};
    border-color: ${(props) => props.theme.color.strockePrimary};
    border-width: 2px;
    border-style: solid;
    &:hover {
      color: ${(props) => props.theme.color.branding};
      background-color: ${(props) => props.theme.color.medium};
      border-color: ${(props) => props.theme.color.strockeSecondary};
      border-width: 2px;
      border-style: solid;
    }

    &:active {
      color: ${(props) => props.theme.color.branding};
      background-color: ${(props) => props.theme.color.medium};
      border-color: ${(props) => props.theme.color.strockeSecondary};
      border-width: 2px;
      border-style: solid;
    }
  `,
  secondary: css`
    color: ${(props) => props.theme.color.branding};
    background-color: ${(props) => props.theme.color.backgroundButton};
    border-color: ${(props) => props.theme.color.strockeSecondary};

    &:hover {
      color: ${(props) => props.theme.color.dark};
      background-color: ${(props) => props.theme.color.branding};
      border-color: ${(props) => props.theme.color.strockeSecondary};
      border-width: 2px;
      border-style: solid;
    }

    &:active {
      color: ${(props) => props.theme.color.dark};
      background-color: ${(props) => props.theme.color.branding};
      border-color: ${(props) => props.theme.color.strockeSecondary};
      border-width: 2px;
      border-style: solid;
    }
  `,
  link: css`
    color: ${(props) => props.theme.color.primary};

    &:hover {
      color: ${(props) => props.theme.color.branding};
    }

    &:active {
      color: ${(props) => props.theme.color.dark};
    }
  `,
}

type Variant = keyof typeof variantStyle

type Props = {
  $size: 'small' | 'medium' | 'huge'
  $variant: Variant
}

export const Button = styled.button<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content:center
    ${(props) => sizeStyle[props.$size]}
    ${(props) => variantStyle[props.$variant]}
    &:focus-visible {
    outline: none;
  }
`
