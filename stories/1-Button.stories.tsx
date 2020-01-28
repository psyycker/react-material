import React from 'react';
import Button from '../src/components/Button';
import { text, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  decorators: [withKnobs]
};

export const Text = () => <Button label={text('Label', 'Button Label')} />;

export const Emoji = () => <Button label={text('Label', 'Button Label')} />;
