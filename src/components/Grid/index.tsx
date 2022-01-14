import { ReactNode } from 'react';

import { ContainerProps, Container } from './styles';

export interface GridProps extends ContainerProps {
  className?: string;
  children?: ReactNode;
}

export const Grid = ({
  children,
  className = '',
  columns,
  gap = 16,
  rows = '1fr',
  ...rest
}: GridProps) => {
  return (
    <Container
      columns={columns}
      rows={rows}
      gap={gap}
      className={`astro-grid ${className}`}
      {...rest}
    >
      {children}
    </Container>
  );
};
