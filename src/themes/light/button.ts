import { darken, lighten } from 'polished';

import colors, { primary, secondary } from './_colors';
import fonts from './_fonts';

export default {
  params: {
    ...fonts.button,
    height: '40px',
    padding: '0px 24px',
    radius: '4px',
  },
  primary: {
    color: colors.white,
    backgroundColor: primary,
    border: `1px solid ${primary}`,
    pressed: {
      border: `1px solid ${darken(0.02, primary)}`,
      backgroundColor: darken(0.02, primary),
    },
    hovered: {
      border: `1px solid ${lighten(0.07, primary)}`,
      backgroundColor: lighten(0.07, primary),
    },
    focused: {
      border: `1px solid ${lighten(0.09, primary)}`,
      backgroundColor: lighten(0.09, primary),
    },
  },
  secondary: {
    color: colors.white,
    backgroundColor: secondary,
    border: `1px solid ${secondary}`,
    pressed: {
      border: `1px solid ${darken(0.02, secondary)}`,
      backgroundColor: darken(0.02, secondary),
    },
    hovered: {
      border: `1px solid ${lighten(0.07, secondary)}`,
      backgroundColor: lighten(0.07, secondary),
    },
    focused: {
      border: `1px solid ${lighten(0.09, secondary)}`,
      backgroundColor: lighten(0.09, secondary),
    },
  },
  error: {
    color: colors.white,
    backgroundColor: colors.error,
    border: `1px solid ${colors.error}`,
    pressed: {
      border: `1px solid ${darken(0.02, colors.error)}`,
      backgroundColor: darken(0.02, colors.error),
    },
    hovered: {
      border: `1px solid ${lighten(0.07, colors.error)}`,
      backgroundColor: lighten(0.07, colors.error),
    },
    focused: {
      border: `1px solid ${lighten(0.09, colors.error)}`,
      backgroundColor: lighten(0.09, colors.error),
    },
  },
  warning: {
    color: colors.black,
    backgroundColor: colors.warning,
    border: `1px solid ${colors.warning}`,
    pressed: {
      border: `1px solid ${darken(0.02, colors.warning)}`,
      backgroundColor: darken(0.02, colors.warning),
    },
    hovered: {
      border: `1px solid ${lighten(0.07, colors.warning)}`,
      backgroundColor: lighten(0.07, colors.warning),
    },
    focused: {
      border: `1px solid ${lighten(0.09, colors.warning)}`,
      backgroundColor: lighten(0.09, colors.warning),
    },
  },
  success: {
    color: colors.white,
    backgroundColor: colors.success,
    border: `1px solid ${colors.success}`,
    pressed: {
      border: `1px solid ${darken(0.02, colors.success)}`,
      backgroundColor: darken(0.02, colors.success),
    },
    hovered: {
      border: `1px solid ${lighten(0.07, colors.success)}`,
      backgroundColor: lighten(0.07, colors.success),
    },
    focused: {
      border: `1px solid ${lighten(0.09, colors.success)}`,
      backgroundColor: lighten(0.09, colors.success),
    },
  },
  info: {
    color: colors.white,
    backgroundColor: colors.info,
    border: `1px solid ${colors.info}`,
    pressed: {
      border: `1px solid ${darken(0.02, colors.info)}`,
      backgroundColor: darken(0.02, colors.info),
    },
    hovered: {
      border: `1px solid ${lighten(0.07, colors.info)}`,
      backgroundColor: lighten(0.07, colors.info),
    },
    focused: {
      border: `1px solid ${lighten(0.09, colors.info)}`,
      backgroundColor: lighten(0.09, colors.info),
    },
  },
  help: {
    color: colors.white,
    backgroundColor: colors.help,
    border: `1px solid ${colors.help}`,
    pressed: {
      border: `1px solid ${darken(0.02, colors.help)}`,
      backgroundColor: darken(0.02, colors.help),
    },
    hovered: {
      border: `1px solid ${lighten(0.07, colors.help)}`,
      backgroundColor: lighten(0.07, colors.help),
    },
    focused: {
      border: `1px solid ${lighten(0.09, colors.help)}`,
      backgroundColor: lighten(0.09, colors.help),
    },
  },
  'primary-outline': {
    color: primary,
    backgroundColor: colors.white,
    border: `1px solid ${primary}`,
    pressed: {
      color: colors.white,
      border: `1px solid ${darken(0.02, primary)}`,
      backgroundColor: darken(0.02, primary),
    },
    hovered: {
      color: colors.white,
      border: `1px solid ${lighten(0.07, primary)}`,
      backgroundColor: lighten(0.07, primary),
    },
    focused: {
      color: colors.white,
      border: `1px solid ${lighten(0.09, primary)}`,
      backgroundColor: lighten(0.09, primary),
    },
  },
  'secondary-outline': {
    color: secondary,
    backgroundColor: colors.white,
    border: `1px solid ${secondary}`,
    pressed: {
      color: colors.white,
      border: `1px solid ${darken(0.02, secondary)}`,
      backgroundColor: darken(0.02, secondary),
    },
    hovered: {
      color: colors.white,
      border: `1px solid ${lighten(0.07, secondary)}`,
      backgroundColor: lighten(0.07, secondary),
    },
    focused: {
      color: colors.white,
      border: `1px solid ${lighten(0.09, secondary)}`,
      backgroundColor: lighten(0.09, secondary),
    },
  },
  'error-outline': {
    color: colors.error,
    backgroundColor: colors.white,
    border: `1px solid ${colors.error}`,
    pressed: {
      color: colors.white,
      border: `1px solid ${darken(0.02, colors.error)}`,
      backgroundColor: darken(0.02, colors.error),
    },
    hovered: {
      color: colors.white,
      border: `1px solid ${lighten(0.07, colors.error)}`,
      backgroundColor: lighten(0.07, colors.error),
    },
    focused: {
      color: colors.white,
      border: `1px solid ${lighten(0.09, colors.error)}`,
      backgroundColor: lighten(0.09, colors.error),
    },
  },
  'warning-outline': {
    color: colors.black,
    backgroundColor: colors.white,
    border: `1px solid ${colors.warning}`,
    pressed: {
      border: `1px solid ${darken(0.02, colors.warning)}`,
      backgroundColor: darken(0.02, colors.warning),
    },
    hovered: {
      border: `1px solid ${lighten(0.07, colors.warning)}`,
      backgroundColor: lighten(0.07, colors.warning),
    },
    focused: {
      border: `1px solid ${lighten(0.09, colors.warning)}`,
      backgroundColor: lighten(0.09, colors.warning),
    },
  },
  'success-outline': {
    color: colors.success,
    backgroundColor: colors.white,
    border: `1px solid ${colors.success}`,
    pressed: {
      color: colors.white,
      border: `1px solid ${darken(0.02, colors.success)}`,
      backgroundColor: darken(0.02, colors.success),
    },
    hovered: {
      color: colors.white,
      border: `1px solid ${lighten(0.07, colors.success)}`,
      backgroundColor: lighten(0.07, colors.success),
    },
    focused: {
      color: colors.white,
      border: `1px solid ${lighten(0.09, colors.success)}`,
      backgroundColor: lighten(0.09, colors.success),
    },
  },
  'info-outline': {
    color: colors.info,
    backgroundColor: colors.white,
    border: `1px solid ${colors.info}`,
    pressed: {
      color: colors.white,
      border: `1px solid ${darken(0.02, colors.info)}`,
      backgroundColor: darken(0.02, colors.info),
    },
    hovered: {
      color: colors.white,
      border: `1px solid ${lighten(0.07, colors.info)}`,
      backgroundColor: lighten(0.07, colors.info),
    },
    focused: {
      color: colors.white,
      border: `1px solid ${lighten(0.09, colors.info)}`,
      backgroundColor: lighten(0.09, colors.info),
    },
  },
  'help-outline': {
    color: colors.help,
    backgroundColor: colors.white,
    border: `1px solid ${colors.help}`,
    pressed: {
      color: colors.white,
      border: `1px solid ${darken(0.02, colors.help)}`,
      backgroundColor: darken(0.02, colors.help),
    },
    hovered: {
      color: colors.white,
      border: `1px solid ${lighten(0.07, colors.help)}`,
      backgroundColor: lighten(0.07, colors.help),
    },
    focused: {
      color: colors.white,
      border: `1px solid ${lighten(0.09, colors.help)}`,
      backgroundColor: lighten(0.09, colors.help),
    },
  },
};
