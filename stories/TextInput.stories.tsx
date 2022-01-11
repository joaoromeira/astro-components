import { Meta, Story } from '@storybook/react';

import { TextInputProps, TextInput } from '../src';

export default {
  title: 'Text Input',
  component: TextInput,
  argTypes: {},
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Text',
};
