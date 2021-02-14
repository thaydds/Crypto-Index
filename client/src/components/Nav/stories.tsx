import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { BrowserRouter, Route } from 'react-router-dom';
import { Nav, OwnProps } from '.';

export default {
  title: 'Nav',
  component: Nav,
  args: {
    handleClick: () => false,
  },
} as Meta;

export const Basic: Story<OwnProps> = (args) => (
  <BrowserRouter>
    <Route>
      <Nav {...args} />
    </Route>
  </BrowserRouter>
);
