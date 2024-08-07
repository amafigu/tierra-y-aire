import { css, styled } from 'styled-components'

import { fontSizes } from '@/constants/fontSizes'

const sizeStyle = {
  small: css`
    font-size: ${fontSizes.small};
    padding: 0.5rem 1rem;
    border-radius: ${(props) => props.theme.borderRadius.small};
  `,
  smallRounded: css`
    font-size: ${fontSizes.small};
    padding: 0.5rem 1rem;
    border-radius: 1rem;
  `,

  medium: css`
    font-size: ${fontSizes.medium};
    padding: 0.75rem 1.5rem;
    border-radius: ${(props) => props.theme.borderRadius.regular};
  `,
  mediumRounded: css`
    font-size: ${fontSizes.medium};
    padding: 0.75rem 1.5rem;
    border-radius: 1.5rem;
  `,
  huge: css`
    font-size: ${fontSizes.large};
    padding: 1rem 2rem;
    border-radius: ${(props) => props.theme.borderRadius.large};
  `,
  hugeRounded: css`
    font-size: ${fontSizes.large};
    padding: 1rem 2rem;
    border-radius: 2rem;
  `,
}

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
    }
  `,
  link: css`
    color: ${(props) => props.theme.color.primary};
    padding: 0;

    &:hover {
      color: ${(props) => props.theme.color.branding};
    }

    &:active {
      color: ${(props) => props.theme.color.primary};
    }
  `,
  card: css`
    color: ${(props) => props.theme.color.primary};
    border-width: 1px;
    border-style: solid;

    borde-color: ${(props) => props.theme.color.primary};
    &:hover {
      color: ${(props) => props.theme.color.branding};
    }

    &:active {
      color: ${(props) => props.theme.color.primary};
    }
  `,
}

type Variant = keyof typeof variantStyle

type Props = {
  $size:
    | 'small'
    | 'smallRounded'
    | 'medium'
    | 'mediumRounded'
    | 'huge'
    | 'hugeRounded'
  $variant: Variant
}

export const Button = styled.button<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => sizeStyle[props.$size]}
  ${(props) => variantStyle[props.$variant]}
    &:focus-visible {
    outline: none;
  }
`
