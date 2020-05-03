import React from 'react';
import { withTheme } from 'styled-components';

import Theme from '../themes/Theme';

interface ButtonProps {
    title: string;
    role?: 'primary' | 'secondary';
    onClick?: () => void;
}
type Props = { theme: Theme } & ButtonProps;

const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

const Button: React.FC<Props> = ({ theme, title = 'Button', role = 'primary', onClick }) => {
    const t = (colorValue: string) => {
        return theme[`button${capitalizeFirstLetter(role)}${capitalizeFirstLetter(colorValue)}`];
    };
    return (
        <button
            className={`bg-${t('backgroundColor')} border-${t(
                'primaryBorderColor'
            )} border-2 hover:bg-${t('hoverBackgroundColor')} text-${t('textColor')} hover:text-${t(
                'hoverTextColor'
            )} font-bold py-2 px-4 rounded`}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default withTheme(Button);
