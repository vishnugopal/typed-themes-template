import React from 'react';
import Button from '../components/Button';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Button',
    component: Button,
    decorators: [withKnobs],
};

export const Action = () => (
    <div className="m-2">
        <Button
            title={text('Button title', 'Login')}
            role="action"
            onClick={action('button-click')}
        />
    </div>
);

export const SecondaryAction = () => (
    <div className="m-2">
        <Button
            title={text('Button title', 'Login')}
            role="secondaryAction"
            onClick={action('button-click')}
        />
    </div>
);
