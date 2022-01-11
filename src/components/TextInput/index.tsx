import { FC, InputHTMLAttributes } from 'react';

import { Label } from '../Label';
import { Container, Input } from './styles';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

export const TextInput: FC<TextInputProps> = ({
  className,
  label,
  ...rest
}) => {
  return (
    <Container className={`magic-text-input ${className}`}>
      <Label>{label}</Label>
      <Input {...rest} />
    </Container>
  );
};
