import styled from 'styled-components';

export interface IContainerProps {
  className?: string;
  color?: string;
  duration: number;
}

export const Container = styled.div<IContainerProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;

  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.5;
    background-color: ${({ color }) => color || '#ffffff'};
    animation-name: ripple;
    animation-duration: ${({ duration }) => duration}ms;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(1.5);
    }
  }
`;
