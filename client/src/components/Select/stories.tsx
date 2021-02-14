import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Select } from '.';

export default {
  title: 'Select',
  component: Select,
} as Meta;

export const Basic: Story = (args) => <Select {...args} />;
