import { ButtonHTMLAttributes } from 'react';

import { Ripple } from '../Ripple';
import { ContainerProps, Container } from './styles';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    ContainerProps {}

export const Button = ({
  children,
  className,
  color,
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <Container className={`astro-button ${className}`} color={color} {...rest}>
      {children}
      <Ripple duration={600} />
    </Container>
  );
};
