import { FC } from 'react';

import { ContainerProps, Container } from './styles';

export interface GridProps extends ContainerProps {
  className?: string;
}

export const Grid: FC<GridProps> = ({
  children,
  className = '',
  columns,
  gap = 16,
  rows = '1fr',
  ...rest
}) => {
  return (
    <Container
      columns={columns}
      rows={rows}
      gap={gap}
      className={`magic-grid ${className}`}
      {...rest}
    >
      {children}
    </Container>
  );
};
