import { Meta, Story } from '@storybook/react';

import { FlexProps, Flex, Button } from '../src';

export default {
  title: 'Flex',
  component: Flex,
  argTypes: {},
} as Meta;

const Template: Story<FlexProps> = (args) => <Flex {...args} />;

export const Default = Template.bind({});

Default.args = {
  gap: 16,
  children: (
    <>
      <Button color="primary">Success</Button>
      <Button color="secondary">Help</Button>
      <Button color="success">Info</Button>
    </>
  ),
};
