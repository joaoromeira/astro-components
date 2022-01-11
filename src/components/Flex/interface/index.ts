import { HTMLAttributes } from 'react';

import { Margin, Padding } from 'src/utils/makeStyles';

type Align =
  | 'auto'
  | 'baseline'
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'space-around'
  | 'space-between'
  | 'stretch';

type Justify =
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'space-between'
  | 'space-evenly'
  | 'space-around';

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

type FlexWrap = 'no-wrap' | 'wrap' | 'wrap-reverse';

type Flex = {
  alignContent?: Align;
  alignItems?: Align;
  alignSelf?: Align;
  // Shortcut align items
  align?: Align;
  justifyContent?: Justify;
  // Shortcut justify content
  justify?: Justify;
  gap?: number | string;
  flexDirection?: FlexDirection;
  // Wrap
  flexWrap?: FlexWrap;
  // Shortcut for flexWrap
  wrap?: FlexWrap;
  // Width 100%
  fullWidth?: boolean;
};

export type FlexProps = Partial<Flex> &
  HTMLAttributes<HTMLDivElement> &
  Partial<Margin> &
  Partial<Padding>;
