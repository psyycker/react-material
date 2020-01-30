import React from 'react';
import { text, withKnobs, color, select } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import * as themes from '../Theming';
import Checkbox from '../../src/components/Checkbox';
import Radio from "../../src/components/Radio";

export default {
  title: 'Radio',
  decorators: [withKnobs]
};

export const Alone = () => (
  <ThemeProvider theme={themes[select('Theme', ['theme1', 'theme2', 'theme3'], 'theme1')]}>
    <Radio color="primary" />
    <br />
    <br />
    <Radio color="secondary" />
    <br />
    <br />
    <Radio color="warning" />
    <br />
    <br />
    <Radio color="error" />
    <br />
    <br />
    {/*<Radio disabled color="primary" />*/}
  </ThemeProvider>
);
