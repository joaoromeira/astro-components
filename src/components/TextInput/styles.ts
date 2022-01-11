import styled, { css } from 'styled-components';

export const Container = styled.div`
  input {
    margin-top: 5px;
  }
`;

export const Input = styled.input`
  display: block;
  outline: none;

  ${({ theme }) => css`
    font-size: ${theme.textInput.params.fontSize};
    font-weight: ${theme.textInput.params.fontWeight};
    color: ${theme.textInput.default.color};
    background-color: ${theme.textInput.default.backgroundColor};
    height: ${theme.textInput.params.height};
    width: ${theme.textInput.params.width};
    padding: ${theme.textInput.params.padding};
    border-radius: ${theme.textInput.params.radius};
    border: ${theme.textInput.default.border};

    :hover {
      border-color: ${theme.textInput.default.hovered.borderColor};
    }

    :focus {
      border-color: ${theme.textInput.default.focused.borderColor};
    }
  `};
`;
