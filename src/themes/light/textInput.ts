import colors from './_colors';
import fonts from './_fonts';

export default {
  params: {
    ...fonts.input,
    height: '40px',
    width: '100%',
    padding: '4px 4px 4px 15px',
    radius: '3px',
  },
  default: {
    color: '#515357',
    backgroundColor: colors.gray0,
    border: `1px solid #e2e2e2`,
    hovered: {
      borderColor: '#7f838a',
    },
    focused: {
      borderColor: '#7f838a',
    },
  },
};
