import React from 'react';
import Button from '../../src/components/Button';
import { text, withKnobs, color, select } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import * as themes from '../Theming';
import Checkbox from '../../src/components/Checkbox';

export default {
  title: 'Checkbox',
  decorators: [withKnobs]
};


export const Alone = () => (
  <ThemeProvider theme={themes[select('Theme', ['theme1', 'theme2', 'theme3'], 'theme1')]}>
    <Checkbox color="primary" />
    <br />
    <br />
    <Checkbox color="secondary" />
    <br />
    <br />
    <Checkbox color="warning" />
    <br />
    <br />
    <Checkbox color="error" />
    <br />
    <br />
    <Checkbox disabled color="primary" />
  </ThemeProvider>
);
