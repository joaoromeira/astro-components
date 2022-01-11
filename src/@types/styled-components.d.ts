/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { light } from 'src/themes';

type ThemeInterface = typeof light;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}
