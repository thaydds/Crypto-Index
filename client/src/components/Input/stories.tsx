import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Input, OwnProps } from '.';

export default {
  title: 'Input',
  component: Input,
  args: {
    type: 'text',
    placeholder: 'text',
  },
  argTypes: {
    isCurrency: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

export const Basic: Story<OwnProps> = (args) => <Input {...args} />;

export const Currency: Story<OwnProps> = (args) => (
  <Input value="0" {...args} />
);
Currency.args = {
  isCurrency: true,
};
