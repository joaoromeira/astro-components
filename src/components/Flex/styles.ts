import styled, { css } from 'styled-components';

import { makeSpaces } from '../../utils/makeStyles';
import { FlexProps } from './interface';

export const Container = styled.div<FlexProps>`
  ${({
    align,
    alignItems,
    flexWrap,
    flexDirection,
    gap,
    justify,
    justifyContent,
    margin,
    mt,
    mr,
    mb,
    ml,
    padding,
    pt,
    pr,
    pb,
    pl,
    wrap,
    fullWidth,
  }) => css`
    display: flex;
    align-items: ${align || alignItems};
    justify-content: ${justify || justifyContent};
    gap: ${gap || 0}px;
    flex-wrap: ${wrap || flexWrap};
    flex-direction: ${flexDirection};

    width: ${fullWidth ? '100%' : 'auto'};

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
  `}
`;
