import { FC } from 'react';

import { FlexProps } from './interface';
import { Container } from './styles';

export const Flex: FC<FlexProps> = ({ className, ...rest }) => {
  return <Container className={`magic-flex ${className}`} {...rest} />;
};

export { FlexProps } from './interface';
