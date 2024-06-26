import { IKContext, IKImage } from 'imagekitio-react';
import type { CSSProperties } from 'react';
import { FC } from 'react';
import { styled } from 'styled-components';

type Props = {
  $margin?: CSSProperties['margin'];
  $padding?: CSSProperties['padding'];
  $height?: CSSProperties['height'];
  $width?: CSSProperties['width'];
  $borderRadius?: CSSProperties['borderRadius'];
  $border?: CSSProperties['border'];
  $boxShadow?: CSSProperties['boxShadow'];
  $objectFit?: CSSProperties['objectFit'];
  $objectPosition?: CSSProperties['objectPosition'];
  path?: string;
  src?: string;
  alt?: string;
};

const BaseImage = styled(IKImage)<Props>`
  display: block;
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
  height: ${(props) => props.$height};
  width: ${(props) => props.$width};
  border-radius: ${(props) => props.$borderRadius};
  border: ${(props) => props.$border};
  box-shadow: ${(props) => props.$boxShadow};
  object-fit: ${(props) => props.$objectFit};
  object-position: ${(props) => props.$objectPosition};
`;

const contextIkImage = (Component: typeof BaseImage) => {
  const ImageWithIkContext: FC<Props> = (props) => (
    <IKContext urlEndpoint={import.meta.env.VITE_IMAGE_KIT_URL}>
      <Component {...props} />
    </IKContext>
  );
  return ImageWithIkContext;
};

export const Image = contextIkImage(BaseImage);
