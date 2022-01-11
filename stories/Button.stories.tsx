import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';

import { Button, ButtonProps } from '../src';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  onClick: action('primary click'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  color: 'secondary',
  onClick: action('secondary click'),
};
