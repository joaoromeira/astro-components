interface MakeStyle {
  prefix: string;
  major?: number | string;
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
}

export interface Margin {
  margin: number | string;
  mt: number | string;
  mr: number | string;
  mb: number | string;
  ml: number | string;
}

export interface Padding {
  padding: number | string;
  pt: number | string;
  pr: number | string;
  pb: number | string;
  pl: number | string;
}

export const makeProperty = (
  prefix: string,
  measure: number | string,
  unit = 'px'
): string => {
  const size = !Number(measure) ? measure : `${Number(measure)}${unit}`;

  return `${prefix}: ${size};`;
};

export const makeSpaces = ({
  prefix,
  major,
  top,
  right,
  bottom,
  left,
}: MakeStyle): string | string[] => {
  if (major) {
    return makeProperty(prefix, major);
  }

  const styles: string[] = [];

  if (top) {
    styles.push(makeProperty(prefix + '-top', top));
  }

  if (right) {
    styles.push(makeProperty(prefix + '-right', right));
  }

  if (bottom) {
    styles.push(makeProperty(prefix + '-bottom', bottom));
  }

  if (left) {
    styles.push(makeProperty(prefix + '-left', left));
  }

  return styles.join(' ');
};

export default {
  makeProperty,
  makeSpaces,
};
