import { Meta, Story } from '@storybook/react';

import { GridProps, Button, Grid } from '../src';

export default {
  title: 'Grid',
  component: Grid,
  argTypes: {},
} as Meta;

const Template: Story<GridProps> = (args) => <Grid {...args} />;

export const Default = Template.bind({});

Default.args = {
  columns: '1fr 1fr 1fr',
  gap: 16,
  children: (
    <>
      <Button color="primary">Success</Button>
      <Button color="secondary">Help</Button>
      <Button color="success">Info</Button>
    </>
  ),
};
