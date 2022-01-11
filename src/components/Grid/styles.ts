import styled, { css } from 'styled-components';

import { makeSpaces, Margin, Padding } from '../../utils/makeStyles';

export interface ContainerProps extends Partial<Padding>, Partial<Margin> {
  columns: string;
  rows?: string;
  gap?: number | string;
}

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: ${({ columns }) => columns};
  grid-template-rows: ${({ rows }) => rows};
  grid-gap: ${({ gap }) => (Number(gap) === NaN ? gap : `${Number(gap)}px`)};

  ${({ margin, mt, mr, mb, ml, padding, pt, pr, pb, pl }) => css`
    ${makeSpaces({
      prefix: 'padding',
      major: padding,
      top: pt,
      right: pr,
      bottom: pb,
      left: pl,
    })};

    ${makeSpaces({
      prefix: 'margin',
      major: margin,
      top: mt,
      right: mr,
      bottom: mb,
      left: ml,
    })};
  `};
`;
