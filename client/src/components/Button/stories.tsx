import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button } from '.';

export default {
  title: 'Button',
  component: Button,
  args: {
    text: 'default',
  },
} as Meta;

export const Basic: Story = (args) => (
  <Button type="button">{args.text}</Button>
);
