import { FC, LabelHTMLAttributes } from 'react';

import { Container } from './styles';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

export const Label: FC<LabelProps> = ({ className, children, ...rest }) => {
  return (
    <Container className={`magic-label ${className}`} {...rest}>
      {children}
    </Container>
  );
};
