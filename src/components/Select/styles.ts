import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Display = styled.div`
  cursor: pointer;

  ${({ theme }) => css`
    font-size: ${theme.textInput.params.fontSize};
    font-weight: ${theme.textInput.params.fontWeight};
    color: ${theme.textInput.default.color};
    background-color: ${theme.textInput.default.backgroundColor};
    height: ${theme.textInput.params.height};
    /* width: ${theme.textInput.params.width}; */
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

export const DisplayItem = styled.div`
  padding: 4px;
  border-radius: 3px;
  background-color: #fafafa;

  display: inline-block;
`;

export const Dropdown = styled.div`
  display: grid;
  margin-top: 8px;

  label {
    cursor: pointer;
    position: relative;
    z-index: 12;

    display: flex;
    align-items: center;
    height: 32px;

    input {
      display: none;

      + span {
        display: inline-block;
        position: absolute;
        height: 100%;
        width: 100%;

        + span {
          user-select: none;
          padding: 0 8px;
          z-index: 13;
        }
      }

      :checked + span {
        background-color: #eeeeee;
      }
    }
  }

  ${({ theme }) => css`
    background-color: ${theme.textInput.default.backgroundColor};
    border-radius: ${theme.textInput.params.radius};
    border: ${theme.textInput.default.border};
  `};
`;
