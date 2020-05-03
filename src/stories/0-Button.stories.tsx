import React from 'react';
import Button from '../components/Button';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Button',
    component: Button,
    decorators: [withKnobs],
};

export const Primary = () => (
    <div className="m-2">
        <Button
            title={text('Button title', 'Login')}
            role="primary"
            onClick={action('button-click')}
        />
    </div>
);

export const Secondary = () => (
    <div className="m-2">
        <Button
            title={text('Button title', 'Login')}
            role="secondary"
            onClick={action('button-click')}
        />
    </div>
);
