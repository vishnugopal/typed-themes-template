import React from 'react';
import classNames from 'classnames';
import { withTheme } from 'styled-components';

import Theme from '../themes/Theme';

interface ButtonProps {
    title: string;
    role?: 'action' | 'secondaryAction';
    onClick?: () => void;
}
type Props = { theme: Theme } & ButtonProps;

const Button: React.FC<Props> = ({ theme, title = 'Button', role = 'action', onClick }) => {
    const tint = theme[`${role}Color`];
    const defaultBackgroundColor = `${tint}-${theme.defaultIntensity}`;
    const hoverBackgroundColor = `${tint}-${theme.hoverIntensity}`;
    const borderColor = `${theme.neutralColor}-${theme.defaultIntensity}`;
    const defaultTextColor = `${tint}-${1000 - theme.defaultIntensity}`;
    const hoverTextColor = `${tint}-${1000 - theme.hoverIntensity}`;

    const backgroundClasses = [`bg-${defaultBackgroundColor}`, `hover:bg-${hoverBackgroundColor}`];
    const textClasses = [`font-bold text-${defaultTextColor}`, `hover:text-${hoverTextColor}`];
    const borderClasses = [`rounded`, `border-${borderColor}`, `border-1`];
    const paddingAndMarginClasses = [`py-2 px-4`];

    return (
        <button
            className={classNames(
                backgroundClasses,
                textClasses,
                borderClasses,
                paddingAndMarginClasses
            )}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default withTheme(Button);
