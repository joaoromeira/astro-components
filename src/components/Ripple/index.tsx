import { useState } from 'react';

import useDebouncedRippleCleanUp from '../../hooks/useDebounceRippleCleanUp';
import { IContainerProps, Container } from './styles';

interface RippleArrayState {
  x: number;
  y: number;
  size: any;
}

export const Ripple = ({
  className,
  color,
  duration,
}: IContainerProps): JSX.Element => {
  const [rippleArray, setRippleArray] = useState<RippleArrayState[]>([]);

  const addRipple = (event) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;

    const x = event.pageX - rippleContainer.x - rippleContainer.width / 2;
    const y = event.pageY - rippleContainer.y - rippleContainer.width / 2;
    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray((prevState) => [...prevState, newRipple]);
  };

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  return (
    <Container
      className={`astro-ripple ${className}`}
      duration={duration}
      color={color}
      onMouseDown={addRipple}
    >
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              key={'ripple_' + index.toString()}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          );
        })}
    </Container>
  );
};
