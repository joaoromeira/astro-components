import styled, { css } from 'styled-components';

export interface ContainerProps {
  color?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'success'
    | 'warning'
    | 'info'
    | 'help'
    | 'primary-outline'
    | 'secondary-outline'
    | 'error-outline'
    | 'success-outline'
    | 'warning-outline'
    | 'info-outline'
    | 'help-outline';
}

export const Container = styled.button`
  cursor: pointer;
  position: relative;

  ${({ color = 'primary', theme }) => css`
    font-size: ${theme.button.params.fontSize};
    font-weight: ${theme.button.params.fontWeight};
    color: ${theme.button[color].color};
    background-color: ${theme.button[color].backgroundColor};
    height: ${theme.button.params.height};
    padding: ${theme.button.params.padding};
    border-radius: ${theme.button.params.radius};
    border: ${theme.button[color].border};

    transition: color 200ms linear, background-color 200ms linear,
      border 200ms linear;

    :hover {
      color: ${theme.button[color].hovered?.color || theme.button[color].color};
      background-color: ${theme.button[color].hovered.backgroundColor};
      border: ${theme.button[color].hovered.border};
    }

    :focus {
      color: ${theme.button[color].focused?.color || theme.button[color].color};
      background-color: ${theme.button[color].focused.backgroundColor};
      border: ${theme.button[color].focused.border};
    }

    /* Pressed */
    :active {
      color: ${theme.button[color].pressed?.color || theme.button[color].color};
      background-color: ${theme.button[color].pressed.backgroundColor};
      border: ${theme.button[color].pressed.border};
    }
  `};
`;
