import styled, { css } from 'styled-components';

export const Container = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.fonts.label.fontSize};
    font-weight: ${theme.fonts.label.fontWeight};
    color: ${theme.fonts.label.color};
  `}
`;
