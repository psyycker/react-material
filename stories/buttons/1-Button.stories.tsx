import React from 'react';
import Button from '../../src/components/Button';
import { text, withKnobs, color, select } from '@storybook/addon-knobs';
import {ThemeProvider} from "styled-components";
import * as themes from '../Theming';

export default {
  title: 'Button',
  decorators: [withKnobs]
};

export const Contained = () => (
  <ThemeProvider theme={themes[select('Theme', ['theme1', 'theme2', 'theme3'], 'theme1')]}>
    <Button color="primary" label={text('Label Button 1', 'Primary Color Button')} />
    <br/>
    <br/>
    <Button color="secondary" label={text('Label Button 2', 'Secondary Color Button')} />
    <br/>
    <br/>
    <Button color="warning" label={text('Label Button 3', 'Warning Color Button')} />
    <br/>
    <br/>
    <Button color="error" label={text('Label Button 4', 'Error Color Button')} />
    <br/>
    <br/>
    <Button disabled color="primary" label={text('Label Button 5', 'Disabled Button')} />
  </ThemeProvider>
  );


export const Text = () => (
  <ThemeProvider theme={themes[select('Theme', ['theme1', 'theme2', 'theme3'], 'theme1')]}>
    <Button type="text" color="primary" label={text('Label Button 1', 'Primary Color Button')} />
    <br/>
    <br/>
    <Button type="text" color="secondary" label={text('Label Button 2', 'Secondary Color Button')} />
    <br/>
    <br/>
    <Button type="text" color="warning" label={text('Label Button 3', 'Warning Color Button')} />
    <br/>
    <br/>
    <Button type="text" color="error" label={text('Label Button 4', 'Error Color Button')} />
    <br/>
    <br/>
    <Button type="text" disabled color="primary" label={text('Label Button 5', 'Disabled Button')} />
  </ThemeProvider>
  );

export const Outlined = () => (
  <ThemeProvider theme={themes[select('Theme', ['theme1', 'theme2', 'theme3'], 'theme1')]}>
    <Button type="outlined" color="primary" label={text('Label Button 1', 'Primary Color Button')} />
    <br/>
    <br/>
    <Button type="outlined" color="secondary" label={text('Label Button 2', 'Secondary Color Button')} />
    <br/>
    <br/>
    <Button type="outlined" color="warning" label={text('Label Button 3', 'Warning Color Button')} />
    <br/>
    <br/>
    <Button type="outlined" color="error" label={text('Label Button 4', 'Error Color Button')} />
    <br/>
    <br/>
    <Button type="outlined" disabled color="primary" label={text('Label Button 5', 'Disabled Button')} />
  </ThemeProvider>
  );
