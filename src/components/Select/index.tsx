import { FC, SelectHTMLAttributes } from 'react';

import { Label } from '../Label';
import { Container } from './styles';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  className?: string;
}

export const Select: FC<SelectProps> = ({ className, label, ...rest }) => {
  return (
    <Container className={`astro-select ${className}`}>
      <Label>{label}</Label>
    </Container>
  );
};
