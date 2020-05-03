import { configure, addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { addParameters } from '@storybook/react'; // <- or your storybook framework

import lightTheme from '../src/themes/lightTheme';

import '../src/assets/styles.css';

// automatically import all files ending in *.stories.tsx
configure(require.context('../src/stories', true, /\.stories\.tsx?$/), module);

addDecorator(withThemesProvider([lightTheme]));

addParameters({
    backgrounds: [
        { name: 'white', value: '#fff', default: true },
        { name: 'black', value: '#000' },
    ],
});
