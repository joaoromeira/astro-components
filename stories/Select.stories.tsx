import { Meta, Story } from '@storybook/react';

import { SelectProps, Select } from '../src';

export default {
  title: 'Select',
  component: Select,
  argTypes: {},
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Text',
};
